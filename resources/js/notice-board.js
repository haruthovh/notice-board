window.NoticeBoard = class {
    #lastApprovedAt = null;
    #storyIds = [];
    #container;

    constructor(stories, container) {
        this.#container = container;
        this.#showStories(stories);
        this.#setTimeoutForFetchingStories();
    }

    #showStories(stories) {
        if (stories.length > 0) {
            for (const story of stories) {
                this.#showStory(story);
            }
        }
    }

    #showStory(story) {
        if (this.#storyIds.includes(story.id)) {
            return;
        }
        this.#storyIds.push(story.id);
        if (this.#lastApprovedAt === null || story.approved_at > this.#lastApprovedAt) this.#lastApprovedAt = story.approved_at;
        const cardElement = $('<div class="my-2 mx-auto max-w-xl rounded overflow-hidden shadow-lg px-6 py-4"></div>');
        $('<div class="font-bold text-xl mb-2"></div>').text(story.title).appendTo(cardElement);
        $('<p class="text-gray-700 text-base"></p>').html(story.description).appendTo(cardElement);
        $('<div class="mt-8 pb-2 text-sm font-bold"></div>').text(`Created at: ${story.created_at}`).appendTo(cardElement);
        cardElement.prependTo(this.#container);
    }

    #setTimeoutForFetchingStories() {
        setTimeout(() => this.#fetchStories(), 5000);
    }

    #fetchStories() {
        $.ajax({
            type: 'post',
            url: '/api/stories',
            dataType: 'json',
            data: {
                lastApprovedAt: this.#lastApprovedAt,
            },
            success: (data) => {
                this.#showStories(data.stories);
                this.#setTimeoutForFetchingStories();
            },
            error(e) {
                console.error(e.responseJSON);
                alert('An error has occurred, please check the console for more information.');
            }
        });
    }
}

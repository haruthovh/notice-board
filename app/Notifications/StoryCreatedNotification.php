<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\HtmlString;

class StoryCreatedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    private $story;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($story)
    {
        $this->story = $story;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('New Story')
                    ->line('You have created a new story with these data.')
                    ->line($this->story->title)
                    ->line(new HtmlString($this->story->description))
                    ->line('Please approve the story to show it on notice board.')
                    ->action('Approve', route('notice_board.approve', ['link' => $this->story->approval_link]));
    }
}

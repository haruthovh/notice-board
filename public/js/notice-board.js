/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/notice-board.js ***!
  \**************************************/
var _lastApprovedAt, _storyIds, _container, _showStories, _showStory, _setTimeoutForFetchingStories, _fetchStories;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

window.NoticeBoard = (_lastApprovedAt = /*#__PURE__*/new WeakMap(), _storyIds = /*#__PURE__*/new WeakMap(), _container = /*#__PURE__*/new WeakMap(), _showStories = /*#__PURE__*/new WeakSet(), _showStory = /*#__PURE__*/new WeakSet(), _setTimeoutForFetchingStories = /*#__PURE__*/new WeakSet(), _fetchStories = /*#__PURE__*/new WeakSet(), /*#__PURE__*/function () {
  function _class2(_stories, container) {
    _classCallCheck(this, _class2);

    _classPrivateMethodInitSpec(this, _fetchStories);

    _classPrivateMethodInitSpec(this, _setTimeoutForFetchingStories);

    _classPrivateMethodInitSpec(this, _showStory);

    _classPrivateMethodInitSpec(this, _showStories);

    _classPrivateFieldInitSpec(this, _lastApprovedAt, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _storyIds, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _container, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _container, container);

    _classPrivateMethodGet(this, _showStories, _showStories2).call(this, _stories);

    _classPrivateMethodGet(this, _setTimeoutForFetchingStories, _setTimeoutForFetchingStories2).call(this);
  }

  return _class2;
}());

function _showStories2(stories) {
  if (stories.length > 0) {
    var _iterator = _createForOfIteratorHelper(stories),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var story = _step.value;

        _classPrivateMethodGet(this, _showStory, _showStory2).call(this, story);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function _showStory2(story) {
  if (_classPrivateFieldGet(this, _storyIds).includes(story.id)) {
    return;
  }

  _classPrivateFieldGet(this, _storyIds).push(story.id);

  if (_classPrivateFieldGet(this, _lastApprovedAt) === null || story.approved_at > _classPrivateFieldGet(this, _lastApprovedAt)) _classPrivateFieldSet(this, _lastApprovedAt, story.approved_at);
  var cardElement = $('<div class="my-2 mx-auto max-w-xl rounded overflow-hidden shadow-lg px-6 py-4"></div>');
  $('<div class="font-bold text-xl mb-2"></div>').text(story.title).appendTo(cardElement);
  $('<p class="text-gray-700 text-base"></p>').html(story.description).appendTo(cardElement);
  $('<div class="mt-8 pb-2 text-sm font-bold"></div>').text("Created at: ".concat(story.created_at)).appendTo(cardElement);
  cardElement.prependTo(_classPrivateFieldGet(this, _container));
}

function _setTimeoutForFetchingStories2() {
  var _this = this;

  setTimeout(function () {
    return _classPrivateMethodGet(_this, _fetchStories, _fetchStories2).call(_this);
  }, 5000);
}

function _fetchStories2() {
  var _this2 = this;

  $.ajax({
    type: 'post',
    url: '/api/stories',
    dataType: 'json',
    data: {
      lastApprovedAt: _classPrivateFieldGet(this, _lastApprovedAt)
    },
    success: function success(data) {
      _classPrivateMethodGet(_this2, _showStories, _showStories2).call(_this2, data.stories);

      _classPrivateMethodGet(_this2, _setTimeoutForFetchingStories, _setTimeoutForFetchingStories2).call(_this2);
    },
    error: function error(e) {
      console.error(e.responseJSON);
      alert('An error has occurred, please check the console for more information.');
    }
  });
}
/******/ })()
;
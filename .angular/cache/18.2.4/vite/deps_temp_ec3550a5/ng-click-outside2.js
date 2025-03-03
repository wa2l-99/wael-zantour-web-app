import {
  DOCUMENT
} from "./chunk-WIVN62QX.js";
import {
  Directive,
  ElementRef,
  NgZone,
  afterNextRender,
  booleanAttribute,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-DRPUPURB.js";
import "./chunk-FDESMX7I.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-click-outside2/fesm2022/ng-click-outside2.mjs
var NgClickOutsideExcludeToken = class {
};
var _NgClickOutsideExcludeDirective = class _NgClickOutsideExcludeDirective extends NgClickOutsideExcludeToken {
  constructor() {
    super(...arguments);
    this.clickOutsideExclude = input("");
    this.document = inject(DOCUMENT);
  }
  excludeCheck() {
    const clickOutsideExclude = this.clickOutsideExclude();
    if (clickOutsideExclude) {
      try {
        const nodes = Array.from(this.document.querySelectorAll(clickOutsideExclude));
        if (nodes) {
          return nodes;
        }
      } catch (err) {
        console.error("[ng-click-outside] Check your exclude selector syntax.", err);
      }
    }
    return [];
  }
  isExclude(target) {
    const nodesExcluded = this.excludeCheck();
    for (let excludedNode of nodesExcluded) {
      if (excludedNode.contains(target)) {
        return true;
      }
    }
    return false;
  }
};
_NgClickOutsideExcludeDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgClickOutsideExcludeDirective_BaseFactory;
  return function NgClickOutsideExcludeDirective_Factory(__ngFactoryType__) {
    return (ɵNgClickOutsideExcludeDirective_BaseFactory || (ɵNgClickOutsideExcludeDirective_BaseFactory = ɵɵgetInheritedFactory(_NgClickOutsideExcludeDirective)))(__ngFactoryType__ || _NgClickOutsideExcludeDirective);
  };
})();
_NgClickOutsideExcludeDirective.ɵdir = ɵɵdefineDirective({
  type: _NgClickOutsideExcludeDirective,
  selectors: [["", "clickOutsideExclude", ""]],
  inputs: {
    clickOutsideExclude: [1, "clickOutsideExclude"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NgClickOutsideExcludeToken,
    useExisting: _NgClickOutsideExcludeDirective
  }]), ɵɵInheritDefinitionFeature]
});
var NgClickOutsideExcludeDirective = _NgClickOutsideExcludeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClickOutsideExcludeDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutsideExclude]",
      standalone: true,
      providers: [{
        provide: NgClickOutsideExcludeToken,
        useExisting: NgClickOutsideExcludeDirective
      }]
    }]
  }], null, null);
})();
function arrayAttribute(events) {
  if (Array.isArray(events)) {
    return events;
  } else {
    return events.split(",");
  }
}
var _NgClickOutsideDirective = class _NgClickOutsideDirective {
  constructor() {
    this.clickOutsideEnabled = input(true, {
      transform: booleanAttribute
    });
    this.clickOutsideEvents = input(["click"], {
      transform: arrayAttribute
    });
    this.clickOutside = output();
    this.excludeDirective = inject(NgClickOutsideExcludeToken, {
      host: true,
      optional: true
    });
    this._el = inject(ElementRef);
    this._ngZone = inject(NgZone);
    this.document = inject(DOCUMENT);
    this._initOnClickBody = this._initOnClickBody.bind(this);
    this._onClickBody = this._onClickBody.bind(this);
    afterNextRender(() => this._init());
  }
  ngOnDestroy() {
    this._removeClickOutsideListener();
  }
  _init() {
    this._initOnClickBody();
  }
  _initOnClickBody() {
    this._initClickOutsideListener();
  }
  _emit(ev) {
    this._ngZone.run(() => this.clickOutside.emit(ev));
  }
  _initClickOutsideListener() {
    this._ngZone.runOutsideAngular(() => {
      this.clickOutsideEvents().forEach((e) => this.document.addEventListener(e, this._onClickBody));
    });
  }
  _removeClickOutsideListener() {
    this._ngZone.runOutsideAngular(() => {
      this.clickOutsideEvents().forEach((e) => this.document.removeEventListener(e, this._onClickBody));
    });
  }
  _onClickBody(ev) {
    if (!this.clickOutsideEnabled()) {
      return;
    }
    if (!this._el.nativeElement.contains(ev.target) && !this.excludeDirective?.isExclude(ev.target)) {
      this._emit(ev);
    }
  }
};
_NgClickOutsideDirective.ɵfac = function NgClickOutsideDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgClickOutsideDirective)();
};
_NgClickOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: _NgClickOutsideDirective,
  selectors: [["", "clickOutside", "", 3, "delayClickOutsideInit", "", 3, "attachOutsideOnClick", ""]],
  inputs: {
    clickOutsideEnabled: [1, "clickOutsideEnabled"],
    clickOutsideEvents: [1, "clickOutsideEvents"]
  },
  outputs: {
    clickOutside: "clickOutside"
  },
  standalone: true
});
var NgClickOutsideDirective = _NgClickOutsideDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutside]:not([delayClickOutsideInit]):not([attachOutsideOnClick])",
      standalone: true
    }]
  }], () => [], null);
})();
var _NgClickOutsideAttachOutsideDirective = class _NgClickOutsideAttachOutsideDirective extends NgClickOutsideDirective {
  constructor() {
    super();
    this.attachOutsideOnClick = input.required({
      transform: booleanAttribute
    });
    effect(() => {
      this.attachOutsideOnClick();
      this._init();
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._removeAttachOutsideOnClickListener();
  }
  _init() {
    if (this.attachOutsideOnClick()) {
      this._initAttachOutsideOnClickListener();
    } else {
      this._initOnClickBody();
    }
  }
  _emit(ev) {
    if (this.attachOutsideOnClick()) {
      this._removeClickOutsideListener();
    }
    super._emit(ev);
  }
  _initAttachOutsideOnClickListener() {
    this._ngZone.runOutsideAngular(() => {
      this.clickOutsideEvents().forEach((e) => this._el.nativeElement.addEventListener(e, this._initOnClickBody));
    });
  }
  _removeAttachOutsideOnClickListener() {
    this._ngZone.runOutsideAngular(() => {
      this.clickOutsideEvents().forEach((e) => this._el.nativeElement.removeEventListener(e, this._initOnClickBody));
    });
  }
};
_NgClickOutsideAttachOutsideDirective.ɵfac = function NgClickOutsideAttachOutsideDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgClickOutsideAttachOutsideDirective)();
};
_NgClickOutsideAttachOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: _NgClickOutsideAttachOutsideDirective,
  selectors: [["", "clickOutside", "", "attachOutsideOnClick", ""]],
  inputs: {
    attachOutsideOnClick: [1, "attachOutsideOnClick"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var NgClickOutsideAttachOutsideDirective = _NgClickOutsideAttachOutsideDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClickOutsideAttachOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutside][attachOutsideOnClick]",
      standalone: true
    }]
  }], () => [], null);
})();
var _NgClickOutsideDelayOutsideDirective = class _NgClickOutsideDelayOutsideDirective extends NgClickOutsideDirective {
  constructor() {
    super(...arguments);
    this.delayClickOutsideInit = input.required({
      transform: booleanAttribute
    });
  }
  _initOnClickBody() {
    if (this.delayClickOutsideInit()) {
      setTimeout(this._initClickOutsideListener.bind(this));
    } else {
      this._initClickOutsideListener();
    }
  }
};
_NgClickOutsideDelayOutsideDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵNgClickOutsideDelayOutsideDirective_BaseFactory;
  return function NgClickOutsideDelayOutsideDirective_Factory(__ngFactoryType__) {
    return (ɵNgClickOutsideDelayOutsideDirective_BaseFactory || (ɵNgClickOutsideDelayOutsideDirective_BaseFactory = ɵɵgetInheritedFactory(_NgClickOutsideDelayOutsideDirective)))(__ngFactoryType__ || _NgClickOutsideDelayOutsideDirective);
  };
})();
_NgClickOutsideDelayOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: _NgClickOutsideDelayOutsideDirective,
  selectors: [["", "clickOutside", "", "delayClickOutsideInit", ""]],
  inputs: {
    delayClickOutsideInit: [1, "delayClickOutsideInit"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var NgClickOutsideDelayOutsideDirective = _NgClickOutsideDelayOutsideDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClickOutsideDelayOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutside][delayClickOutsideInit]",
      standalone: true
    }]
  }], null, null);
})();
var _NgClickOutsideEmitOnBlurDirective = class _NgClickOutsideEmitOnBlurDirective {
  constructor() {
    this._ngZone = inject(NgZone);
    this.document = inject(DOCUMENT);
    this.blurWindow = output();
    this._onWindowBlur = this._onWindowBlur.bind(this);
    afterNextRender(() => this._initWindowBlurListener());
  }
  ngOnDestroy() {
    this._removeWindowBlurListener();
  }
  _initWindowBlurListener() {
    this._ngZone.runOutsideAngular(() => {
      this.document.defaultView?.addEventListener("blur", this._onWindowBlur);
    });
  }
  /**
   * Resolves problem with outside click on iframe
   * @see https://github.com/arkon/ng-click-outside/issues/32
   */
  _onWindowBlur(ev) {
    if (!this.document.hidden) {
      this._ngZone.run(() => this.blurWindow.emit(ev));
    }
  }
  _removeWindowBlurListener() {
    this._ngZone.runOutsideAngular(() => {
      this.document.defaultView?.removeEventListener("blur", this._onWindowBlur);
    });
  }
};
_NgClickOutsideEmitOnBlurDirective.ɵfac = function NgClickOutsideEmitOnBlurDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgClickOutsideEmitOnBlurDirective)();
};
_NgClickOutsideEmitOnBlurDirective.ɵdir = ɵɵdefineDirective({
  type: _NgClickOutsideEmitOnBlurDirective,
  selectors: [["", "clickOutsideEmitOnBlur", ""]],
  outputs: {
    blurWindow: "blurWindow"
  },
  standalone: true
});
var NgClickOutsideEmitOnBlurDirective = _NgClickOutsideEmitOnBlurDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClickOutsideEmitOnBlurDirective, [{
    type: Directive,
    args: [{
      selector: "[clickOutsideEmitOnBlur]",
      standalone: true
    }]
  }], () => [], null);
})();
export {
  NgClickOutsideAttachOutsideDirective,
  NgClickOutsideDelayOutsideDirective,
  NgClickOutsideDirective,
  NgClickOutsideEmitOnBlurDirective,
  NgClickOutsideExcludeDirective,
  NgClickOutsideExcludeToken
};
//# sourceMappingURL=ng-click-outside2.js.map

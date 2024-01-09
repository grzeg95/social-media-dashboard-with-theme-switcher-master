import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2, RendererFactory2, signal} from '@angular/core';
import {THEMES} from './injectors';
import {Themes} from './models';


@Injectable()
export class ThemeSelectorService {

  theme = signal('');
  private renderer: Renderer2;

  constructor(
    @Inject(THEMES) private themes: Themes,
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  select(name: string) {

    for (const themeName of this.themes.names) {
      this.renderer.removeClass(this.document.body, themeName);
    }

    if (!this.themes.names.find((n) => n === name)) {
      this.theme.set(this.themes.default);
      this.renderer.addClass(this.document.body, this.themes.default)
    } else {
      this.theme.set(name);
      this.renderer.addClass(this.document.body, name)
    }
  }

  selectDefault() {

    for (const themeName of this.themes.names) {
      this.renderer.removeClass(this.document.body, themeName);
    }

    this.theme.set(this.themes.default);
    this.renderer.addClass(this.document.body, this.themes.default);
    this.renderer.setStyle(this.document.body, 'transition', '0.1s');
  }
}

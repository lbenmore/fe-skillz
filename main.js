(function (win, doc) {
  function $ (selector, forceArray, context) {
    const ctx = context || doc;
    const el = selector instanceof HTMLDocument || selector instanceof HTMLBodyElement || selector instanceof HTMLElement
      ? selector 
      : forceArray || ctx.querySelectorAll(selector).length > 1
        ? Object.keys(ctx.querySelectorAll(selector)).map(x => ctx.querySelectorAll(selector)[x])
        : ctx.querySelector(selector);

    el.on = function (evtName, fn, opts) {
      if (el.length) return el.forEach(_el => $(_el).on(evtName, fn, opts));
      el.addEventListener(evtName, fn, opts);
      return el;
    }

    el.css = function (properties) {
      if (el.length) return el.forEach(_el => $(_el).css(properties));
      for (const prop in properties) el.style[prop] = properties[prop];
      return el;
    }

    return el;
  }

  function NavItem (item, index) {
    const that = this;
    const hasSubs = item.subitems && item.subitems.length;
    const num = index + 1;

    that.el = document.createElement('li');
    that.el.classList.add('nav__item', `nav__item--${num}`);

    that.el.innerHTML = `
      <span>
        <!--a href="#${item.link}">${item.label}</a-->
        ${item.label}
      </span>
      ${hasSubs ? 
        `<ul class="nav__list nav__list--sub nav__list--sub${num}">
          ${item.subitems.map((subitem, i) => `
            <li class="nav__item nav__item--sub nav__item--sub${i + 1}">
              <!--a href="#${item.link}/${subitem.link}">${subitem.label}</a-->
              ${subitem.label}
            </li>
          `).join('')}
        </ul>` : ''}
    `;

    if (hasSubs) {
      that.active = true;
      that.el.dataset.active = 'false';
      that.el.classList.add('collapsible');

      $(that.el).on('click', evt => {
        switch (that.el.dataset.active) {
          case 'false':
            $('.nav__list--sub', true).map(_ => $(_).style.setProperty('--subnav-height', '0px'));

            $('.nav__list--sub', false, that.el).style.setProperty('--subnav-height', '666px')
            that.el.style.setProperty('--subnav-indicator-rotate', '0deg')


            that.el.dataset.active = 'true';
            break;

          case 'true':
            $('.nav__list--sub', false, that.el).style.setProperty('--subnav-height', '0px')
            that.el.style.setProperty('--subnav-indicator-rotate', '90deg')

            that.el.dataset.active = 'false';
            break;
        }
      });
    }

    return that;
  }

  function populateNav (navItems) {
    const list = document.createElement('ul');
    const style = document.createElement('style');

    list.classList.add('nav__list');

    $('nav').appendChild(list);

    navItems.forEach((navItem, i) => {
      const { el } = new NavItem(navItem, i);
      list.appendChild(el);
    });
  }

  function initFns () {
    fetch('menu.json')
      .then(res => res.json())
      .then(json => populateNav(json));
  }

  if (doc.readyState === 'complete') initFns();
  else doc.addEventListener('DOMContentLoaded', initFns);
})(window, window.document);
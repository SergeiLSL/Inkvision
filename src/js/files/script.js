// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//=======================================================================
//========================================================================================================================================================
// ? Группа радио кнопок шаблон
let all = document.querySelectorAll(".r-all");
for (let a = 0; a < all.length; a++) {
  let radios = all[a].querySelectorAll(".r-input");
  let i = 1;
  all[a].style.setProperty("--options", radios.length);
  radios.forEach((input) => {
    input.setAttribute("data-pos", i);
    input.addEventListener("click", (e) => {
      all[a].style.setProperty(
        "--options-active",
        e.target.getAttribute("data-pos")
      );
    });
    i++;
  });
}

//========================================================================================================================================================

// let gender = document.querySelectorAll('.group-all');
// for (let a = 0; a < all.length; a++){
//     let radios = group-all[a].querySelectorAll('.check-box__input');
//     let i = 1;
//     group-all[a].style.setProperty('--options',radios.length);
//     radios.forEach((input)=>{
//         input.setAttribute('data-pos',i);
//         input.addEventListener('click',(e)=>{
//             group-all[a].style.setProperty('--options-active',e.target.getAttribute('data-pos'));
//         });
//         i++;
//     });
// };

//========================================================================================================================================================

// function show_hide_password(target){
// 	var input = document.getElementById('password1-input');
// 	console.log("!!!!!!!")
// 	if (input.getAttribute('type') == 'password') {
// 		target.classList.add('view');
// 		input.setAttribute('type', 'text');
// 	} else {
// 		target.classList.remove('view');
// 		input.setAttribute('type', 'password');
// 	}
// 	return false;
// }
// //=======================================================================
// "form-pass"
// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('form-pass');
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		if (error === 0) {

// 		} else {
// 			alert('Заполните обязательные поля');
// 		}

// 	}

// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if (input.classList.contains('_email')) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
// 				formAddError(input);
// 				error++;
// 			} else {
// 				if (input.value === '') {
// 					formAddError(input);
// 					error++;
// 				}
// 			}

// 		}
// 		return error;
// 	}

// 	function formAddError(input) {
// 		input.parentElement.classList.add('_error');
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove('_error');
// 		input.classList.remove('_error');
// 	}
// 	//Функция текста email
// 	// function emailTest(input) {
// 	// 	//return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	// 	//Должно содержать не менее одной цифры и одной прописной и строчной буквы, а также не менее 8 и более символов"
// 	// }

// });

//========================================================================================================================================================
// вывод списка городов в странице главная (home.html)
(function ($) {
  const namespace = "autocomplete";
  const version = "1.0.1";

  if (typeof jQuery === "undefined") {
    alert(`${namespace} version ${version} plugin requires jQuery`);
  }

  const defaults = {
    // Text property of an array
    textProperty: "",
    // value propertu of an array
    valueProperty: "",
    // array
    dataSource: [],
    // default selected value
    defaultValue: "",
    // if text is not matched then default value
    // notMatchedValue: '',
    // delay in mili seconds seach text while typing
    keyboardDelay: 500,
    // close the dropdown on select
    closeOnSelect: true,
    // allow custom value
    allowCustomValue: false,
    // Show autocomplete on textbox focus
    showDropdownOnFocus: true,
    // Show dropdown on initialize autocomplete
    showDropdownOnLoad: false,
    // Add custom class to selected item
    selectedClass: "",
    // Add a custom class to autocomplete dropdown
    wrapClass: "",
    // function to excute on click
    onClick: null,
    // function to exute on value change
    onChange: null,
  };

  const variables = {
    dataUID: "data-uid",
    dataIndex: "data-index",
    dataValue: "data-value",
    listTemplate: '<ul class="autocomplete-list">',
    showSearchResult: "show",
    itemTag: "li",
    itemClass: "autocomplete-item",
    selectedClass: "selected",
    eventKeyUp: "keyup." + namespace,
    eventKeyDown: "keydown." + namespace,
    eventOnClick: "click." + namespace,
    eventOnFocus: "focus." + namespace,
    eventOnChange: "change." + namespace,
    eventOnBlur: "blur." + namespace,
  };

  /**
   * All the events for autocomple
   */
  const handlers = {
    // On Item selected event
    onItemSelected: function (e) {
      e.preventDefault();
      const selectedItem = $(e.target),
        $this = this,
        itemsList = $this.list.find(`.${variables.itemClass}`),
        classes = [];

      classes.push(variables.selectedClass);
      if ($this.options.selectedClass) {
        classes.push($this.options.selectedClass);
      }

      itemsList.removeClass(classes.join(" "));
      selectedItem.addClass(classes.join(" "));

      $this.searchBox.val($.trim(selectedItem.text()));
      const index = parseInt(selectedItem.attr(variables.dataIndex));
      if (index || index === 0) {
        $this.data = $this.dataSource[index];
        $this.searchBox.selectedData = $this.data;
      }
      if ($this.options.closeOnSelect) {
        $this.hide();
      } else {
        $this.show();
      }

      if ($this.options.onClick && $.isFunction($this.options.onClick)) {
        $this.options.onClick($this.data);
      }

      if ($this.options.onChange && $.isFunction($this.options.onChange)) {
        $this.options.onChange($this.data);
      }
    },
    onSearchBoxKeyUp: function () {
      const $this = this,
        searchBox = $this.searchBox;

      $this.filterData(searchBox.val());
      if ($this.list.height() == 0) {
        $this.hide();
        return;
      }
    },
    onSearchBoxLeave: function () {
      const $this = this;
      if ($this.list.height() == 0) {
        $this.hide();
        return;
      }
    },
    onSearchBoxFocus: function () {
      const $this = this;
      if ($this.options.showDropdownOnFocus && $this.list.height() > 0) {
        $this.show();
        return;
      }

      $this.hide();
    },
    onSearchBoxValueChange: function () {
      const $this = this,
        searchBox = $this.searchBox;

      $this.filterData(searchBox.val());

      if ($this.options.onChange && $.isFunction($this.options.onChange)) {
        $this.options.onChange($this.data);
      }
    },
    globalClick: function (e) {
      const $this = this,
        searchBox = $this.searchBox,
        element = $this.element;
      let target = e.target,
        hidden = true;

      if (target !== document) {
        while (
          target === element ||
          $(target).closest(".autocomplete").length === 1
        ) {
          hidden = false;
          break;
        }

        target = target.parentNode;
      }

      if (hidden) {
        if (!$this.options.allowCustomValue && !$this.data) {
          searchBox.val("");
          $this.filterData("");
        }

        $this.hide();
      }
    },
  };
  /**
   * All the methods for autocomplete
   */
  const methods = {
    createItem: function (data) {
      const item = {
        text: "",
        value: "",
        selected: false,
        index: 0,
        isShow: true,
      };
      $.extend(item, data);
      const $this = this,
        classes = [];
      if (item.selected) {
        classes.push(variables.selectedClass);
        classes.push(this.options.selectedClass);
        $this.searchBox.val($.trim(item.text));

        if (item.index || item.index === 0) {
          $this.data = $this.dataSource[item.index];
          $this.searchBox.selectedData = $this.data;
        }
      }

      return `<${variables.itemTag} class="${variables.itemClass}
        ${classes.join(" ")}" ${variables.dataValue}="${item.value}" ${
        variables.dataIndex
      }="${item.index}">
        ${item.text}</${variables.itemTag}>`;
    },
    delay: function (func, wait, immediate) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        if (!immediate) {
          timeout = setTimeout(func.bind(this, ...args), wait || 0);
        } else {
          timeout = func.bind(this, ...args);
        }
      };
    },
    matchArray: function (val, arrData) {
      const $this = this;
      return arrData.filter(function (x) {
        return (
          x[$this.options.textProperty] &&
          x[$this.options.textProperty]
            .toLowerCase()
            .indexOf(val.toLowerCase()) > -1
        );
      });
    },
    filterData: function (val) {
      const $this = this,
        inputText = val ? $.trim(val).toLowerCase() : null,
        classes = [];

      classes.push(variables.selectedClass);
      if ($this.options.selectedClass) {
        classes.push($this.options.selectedClass);
      }

      let itemsList = $this.list.find(`.${variables.itemClass}`);
      itemsList.removeClass(classes.join(" "));

      if (inputText) {
        itemsList = itemsList.filter(function (index, item) {
          return (
            inputText && $(item).text().toLowerCase().indexOf(inputText) > -1
          );
        });
      }

      if ($this.options.allowCustomValue) {
        $this.data = val;
        $this.searchBox.selectedData = val;
      } else {
        $this.data = null;
        $this.searchBox.selectedData = null;
      }

      if (itemsList && itemsList.length > 0) {
        itemsList.show();
        const selectedItem = $(itemsList[0]);
        if (
          itemsList.length === 1 &&
          $.trim(selectedItem.text().toLowerCase()) === inputText
        ) {
          selectedItem.trigger(variables.eventOnClick);
        }
      }
      $this.list.find(`.${variables.itemClass}`).not(itemsList).hide();

      $this.show();
    },
    show: function () {
      this.list.addClass(variables.showSearchResult);
    },
    hide: function () {
      this.list.removeClass(variables.showSearchResult);
    },
  };

  const Autocomplete = (function () {
    function Autocomplete(el, options) {
      const $this = this;
      $this.searchBox = $(el);
      $this.searchBox.selectedData = "data";
      $this.element = null;
      $this.options = $.extend({}, defaults, options);
      $this.list = $(variables.listTemplate);
      $this.dataSource = $this.options.dataSource;
      $this.data = null;
      $this.init();
    }

    Autocomplete.prototype = {
      /**
       * constructor
       * intialize the autocomplete plugin
       * @returns {null}
       */
      init: function () {
        const options = this.options;
        this.searchBox.wrap(`<div class="autocomplete ${options.wrapClass}">`);
        this.element = this.searchBox.parent();
        this.element.append(this.list);
        this.load(this.dataSource);
        this.bind();
      },
      load: function (dataSource, isServerData) {
        const $this = this,
          options = this.options,
          classes = [];

        let arrData = dataSource;

        if (!arrData || arrData.length < 1) {
          $this.list.find(`.${variables.itemClass}`).hide();
        }

        const itemsList = [];
        arrData.forEach(function (element, index) {
          const items = {
            text: element[options.textProperty],
            value: element[options.valueProperty],
            selected: false,
            index: index,
          };
          items.selected =
            items.value &&
            items.value.toString().toLowerCase() == options.defaultValue;

          itemsList.push($this.createItem(items));
        });

        $this.list.html("");
        $this.list.html(itemsList.join(" "));
        $this.filterData($this.searchBox.val());

        if ($this.options.showDropdownOnLoad) {
          // $this.show();
          $this.options.showDropdownOnLoad = false;
          return;
        }

        $this.hide();
      },
      bind: function () {
        this.searchBox.on(
          variables.eventKeyUp,
          this.delay($.proxy(this.onSearchBoxKeyUp, this), this.keyboardDelay)
        );
        this.element.on(
          variables.eventOnClick,
          `.${variables.itemClass}`,
          $.proxy(this.onItemSelected, this)
        );

        this.searchBox.on(
          variables.eventOnFocus,
          $.proxy(this.onSearchBoxFocus, this)
        );
        this.searchBox.on(
          variables.eventOnBlur,
          $.proxy(this.onSearchBoxLeave, this)
        );
        this.searchBox.on(
          variables.eventOnChange,
          $.proxy(this.onSearchBoxValueChange, this)
        );

        $(document).on(variables.eventOnClick, $.proxy(this.globalClick, this));
      },
      /**
       * destory the autocomplete plugin
       *
       */
      destroy: function () {},
    };

    return Autocomplete;
  })();

  if ($.extend) {
    $.extend(Autocomplete.prototype, methods, handlers);
  }

  if ($.fn) {
    $.fn.autocomplete = function (options) {
      // Validate Options
      if (
        !options ||
        !options.textProperty ||
        !options.valueProperty ||
        !options.dataSource
      ) {
        throw `${namespace} - Invalid data`;
        return false;
      }

      this.each(function (index, element) {
        const searchBox = $(element);
        searchBox.selectedData = "data";
        let data = searchBox.data(namespace);
        if (!data) {
          // remove the default autocomplete
          // TODO check for remove default autocomplete
          searchBox.attr("novalidate", true);
          searchBox.attr(variables.dataUID, `${namespace}-${index}`);
          data = new Autocomplete(element, options);
          searchBox.data(namespace, data);
        }
      });

      return this;
    };

    $.fn.autocomplete.constractor = Autocomplete;
    //   $.fn.autocomplete = Autocomplete;
  }
})(jQuery);

//========================================================================================================================================================
const cityList = [
    { Id: 1, Name: "Адыгейск" },
    { Id: 2, Name: "Майкоп" },
    { Id: 3, Name: "Горно-Алтайск" },
    /* еще данные */
    { Id: 1108, Name: "Углич" },
    { Id: 1109, Name: "Ярославль" },
];

$("#city").autocomplete({
    dataSource: cityList,
    valueProperty: "Id",
    textProperty: "Name",
    allowCustomValue: true,
});

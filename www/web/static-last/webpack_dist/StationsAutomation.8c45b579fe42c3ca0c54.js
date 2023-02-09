/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var StationsAutomation;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./vue/components/Form/BFormFieldset.vue":
/*!***********************************************!*\
  !*** ./vue/components/Form/BFormFieldset.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BFormFieldset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BFormFieldset.vue?vue&type=script&lang=js& */ \"./vue/components/Form/BFormFieldset.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n;\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _BFormFieldset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"vue/components/Form/BFormFieldset.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BFormFieldset.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BFormFieldset.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BFormFieldset.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    name: 'BFormFieldset',\n    methods: {\n        getSlot(name, scope = {}) {\n            let slot = this.$scopedSlots[name] || this.$slots[name]\n            return typeof slot === 'function' ? slot(scope) : slot\n        }\n    },\n    render(h) {\n        const legendSlot = this.getSlot('label');\n        const descriptionSlot = this.getSlot('description');\n\n        let header = h();\n\n        if (legendSlot) {\n            const description = descriptionSlot\n                ? h('p', {}, [descriptionSlot])\n                : h();\n\n            const legend = h('legend', {}, [legendSlot]);\n\n            header = h(\n                'div',\n                {\n                    staticClass: 'fieldset-legend'\n                },\n                [\n                    legend,\n                    description\n                ]\n            );\n        }\n\n        return h(\n            'fieldset',\n            {\n                staticClass: 'form-group'\n            },\n            [\n                header,\n                this.getSlot('default') || h()\n            ]\n        )\n    }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BFormFieldset.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./vue/components/Form/BWrappedFormCheckbox.vue":
/*!******************************************************!*\
  !*** ./vue/components/Form/BWrappedFormCheckbox.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BWrappedFormCheckbox_vue_vue_type_template_id_723bfeb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3& */ \"./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3&\");\n/* harmony import */ var _BWrappedFormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BWrappedFormCheckbox.vue?vue&type=script&lang=js& */ \"./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BWrappedFormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BWrappedFormCheckbox_vue_vue_type_template_id_723bfeb3___WEBPACK_IMPORTED_MODULE_0__.render,\n  _BWrappedFormCheckbox_vue_vue_type_template_id_723bfeb3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"vue/components/Form/BWrappedFormCheckbox.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormCheckbox.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VuelidateError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuelidateError */ \"./vue/components/Form/VuelidateError.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    name: 'BWrappedFormCheckbox',\n    components: {VuelidateError: _VuelidateError__WEBPACK_IMPORTED_MODULE_1__[\"default\"]},\n    props: {\n        id: {\n            type: String,\n            required: true\n        },\n        name: {\n            type: String,\n        },\n        field: {\n            type: Object,\n            required: true\n        },\n        inputAttrs: {\n            type: Object,\n            default() {\n                return {};\n            }\n        },\n        advanced: {\n            type: Boolean,\n            default: false\n        }\n    },\n    computed: {\n        filteredScopedSlots() {\n            return lodash__WEBPACK_IMPORTED_MODULE_0___default().filter(this.$scopedSlots, (slot, name) => {\n                return !lodash__WEBPACK_IMPORTED_MODULE_0___default().includes([\n                    'default', 'description'\n                ], name);\n            });\n        },\n        fieldState() {\n            return this.field.$dirty ? !this.field.$error : null;\n        },\n        isRequired() {\n            return lodash__WEBPACK_IMPORTED_MODULE_0___default().has(this.field, 'required');\n        }\n    }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormCheckbox.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./vue/components/Form/BWrappedFormGroup.vue":
/*!***************************************************!*\
  !*** ./vue/components/Form/BWrappedFormGroup.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _BWrappedFormGroup_vue_vue_type_template_id_e6b2d282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BWrappedFormGroup.vue?vue&type=template&id=e6b2d282& */ \"./vue/components/Form/BWrappedFormGroup.vue?vue&type=template&id=e6b2d282&\");\n/* harmony import */ var _BWrappedFormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BWrappedFormGroup.vue?vue&type=script&lang=js& */ \"./vue/components/Form/BWrappedFormGroup.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BWrappedFormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BWrappedFormGroup_vue_vue_type_template_id_e6b2d282___WEBPACK_IMPORTED_MODULE_0__.render,\n  _BWrappedFormGroup_vue_vue_type_template_id_e6b2d282___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"vue/components/Form/BWrappedFormGroup.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormGroup.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormGroup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormGroup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _VuelidateError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuelidateError */ \"./vue/components/Form/VuelidateError.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    name: 'BWrappedFormGroup',\n    components: {VuelidateError: _VuelidateError__WEBPACK_IMPORTED_MODULE_1__[\"default\"]},\n    props: {\n        id: {\n            type: String,\n            required: true\n        },\n        name: {\n            type: String,\n        },\n        field: {\n            type: Object,\n            required: true\n        },\n        inputType: {\n            type: String,\n            default: 'text'\n        },\n        inputNumber: {\n            type: Boolean,\n            default: false\n        },\n        inputTrim: {\n            type: Boolean,\n            default: false\n        },\n        inputAttrs: {\n            type: Object,\n            default() {\n                return {};\n            }\n        },\n        autofocus: {\n            type: Boolean,\n            default: false\n        },\n        advanced: {\n            type: Boolean,\n            default: false\n        }\n    },\n    computed: {\n        filteredScopedSlots() {\n            return lodash__WEBPACK_IMPORTED_MODULE_0___default().filter(this.$scopedSlots, (slot, name) => {\n                return !lodash__WEBPACK_IMPORTED_MODULE_0___default().includes([\n                    'default', 'label', 'description'\n                ], name);\n            });\n        },\n        fieldState() {\n            return this.field.$dirty ? !this.field.$error : null;\n        },\n        isRequired() {\n            return lodash__WEBPACK_IMPORTED_MODULE_0___default().has(this.field, 'required');\n        },\n        isNumeric() {\n            return this.inputNumber || this.inputType === \"number\";\n        }\n    },\n    methods: {\n        focus() {\n            if (typeof this.$refs.input !== \"undefined\") {\n                this.$refs.input.focus();\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormGroup.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./vue/components/Form/VuelidateError.vue":
/*!************************************************!*\
  !*** ./vue/components/Form/VuelidateError.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _VuelidateError_vue_vue_type_template_id_1ab49bc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuelidateError.vue?vue&type=template&id=1ab49bc0& */ \"./vue/components/Form/VuelidateError.vue?vue&type=template&id=1ab49bc0&\");\n/* harmony import */ var _VuelidateError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuelidateError.vue?vue&type=script&lang=js& */ \"./vue/components/Form/VuelidateError.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VuelidateError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VuelidateError_vue_vue_type_template_id_1ab49bc0___WEBPACK_IMPORTED_MODULE_0__.render,\n  _VuelidateError_vue_vue_type_template_id_1ab49bc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"vue/components/Form/VuelidateError.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/VuelidateError.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/VuelidateError.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/VuelidateError.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    name: 'VuelidateError',\n    props: {\n        field: Object\n    },\n    data() {\n        return {\n            messages: {\n                required: () => {\n                    return this.$gettext('This field is required.');\n                },\n                minLength: (params) => {\n                    let text = this.$gettext('This field must have at least %{ min } letters.');\n                    return this.$gettextInterpolate(text, params);\n                },\n                maxLength: (params) => {\n                    let text = this.$gettext('This field must have at most %{ max } letters.');\n                    return this.$gettextInterpolate(text, params);\n                },\n                between: (params) => {\n                    let text = this.$gettext('This field must be between %{ min } and %{ max }.');\n                    return this.$gettextInterpolate(text, params);\n                },\n                alpha: () => {\n                    return this.$gettext('This field must only contain alphabetic characters.');\n                },\n                alphaNum: () => {\n                    return this.$gettext('This field must only contain alphanumeric characters.');\n                },\n                numeric: () => {\n                    return this.$gettext('This field must only contain numeric characters.');\n                },\n                integer: () => {\n                    return this.$gettext('This field must be a valid integer.');\n                },\n                decimal: () => {\n                    return this.$gettext('This field must be a valid decimal number.');\n                },\n                email: () => {\n                    return this.$gettext('This field must be a valid e-mail address.');\n                },\n                ipAddress: () => {\n                    return this.$gettext('This field must be a valid IP address.');\n                },\n                url: () => {\n                    return this.$gettext('This field must be a valid URL.');\n                },\n                validatePassword: () => {\n                    return this.$gettext('This password is too common or insecure.');\n                }\n            }\n        }\n    },\n    computed: {\n        errorMessages() {\n            if (!this.field.$error) {\n                return [];\n            }\n\n            let errors = [];\n            lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.messages, (message, key) => {\n                const isValid = !!lodash__WEBPACK_IMPORTED_MODULE_0___default().get(this.field, key, true);\n                if (!isValid) {\n                    const params = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(this.field, ['$params', key], {});\n                    errors.push(message(params));\n                }\n            });\n\n            return errors;\n        }\n    }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/VuelidateError.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./vue/components/Stations/Automation.vue":
/*!************************************************!*\
  !*** ./vue/components/Stations/Automation.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Automation_vue_vue_type_template_id_f60449b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Automation.vue?vue&type=template&id=f60449b6& */ \"./vue/components/Stations/Automation.vue?vue&type=template&id=f60449b6&\");\n/* harmony import */ var _Automation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Automation.vue?vue&type=script&lang=js& */ \"./vue/components/Stations/Automation.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Automation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Automation_vue_vue_type_template_id_f60449b6___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Automation_vue_vue_type_template_id_f60449b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"vue/components/Stations/Automation.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Stations/Automation.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Stations/Automation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Stations/Automation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate */ \"./node_modules/vuelidate/lib/index.js\");\n/* harmony import */ var _components_Form_BFormFieldset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/Form/BFormFieldset */ \"./vue/components/Form/BFormFieldset.vue\");\n/* harmony import */ var _components_Form_BWrappedFormGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Form/BWrappedFormGroup */ \"./vue/components/Form/BWrappedFormGroup.vue\");\n/* harmony import */ var _components_Form_BWrappedFormCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Form/BWrappedFormCheckbox */ \"./vue/components/Form/BWrappedFormCheckbox.vue\");\n/* harmony import */ var _functions_mergeExisting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/functions/mergeExisting */ \"./vue/functions/mergeExisting.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    name: 'StationsAutomation',\n    components: {BFormFieldset: _components_Form_BFormFieldset__WEBPACK_IMPORTED_MODULE_0__[\"default\"], BWrappedFormGroup: _components_Form_BWrappedFormGroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], BWrappedFormCheckbox: _components_Form_BWrappedFormCheckbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"]},\n    mixins: [\n        vuelidate__WEBPACK_IMPORTED_MODULE_4__.validationMixin\n    ],\n    props: {\n        settingsUrl: String,\n        runUrl: String\n    },\n    data() {\n        return {\n            settingsLoading: true,\n            settings: {\n                is_enabled: false,\n                threshold_days: 7\n            }\n        }\n    },\n    validations: {\n        settings: {\n            is_enabled: {},\n            threshold_days: {}\n        }\n    },\n    computed: {\n        thresholdDaysOptions() {\n            const langDays = this.$gettext('%{ days } Days');\n\n            return [\n                {value: '7', text: this.$gettextInterpolate(langDays, {days: 7})},\n                {value: '14', text: this.$gettextInterpolate(langDays, {days: 14})},\n                {value: '30', text: this.$gettextInterpolate(langDays, {days: 30})},\n                {value: '60', text: this.$gettextInterpolate(langDays, {days: 60})}\n            ];\n        }\n    },\n    mounted() {\n        this.relist();\n    },\n    methods: {\n        relist() {\n            this.$v.settings.$reset();\n            this.settingsLoading = true;\n\n            this.axios.get(this.settingsUrl).then((resp) => {\n                this.settings = (0,_functions_mergeExisting__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.settings, resp.data);\n                this.settingsLoading = false;\n            });\n        },\n        submit() {\n            this.$v.settings.$touch();\n            if (this.$v.settings.$anyError) {\n                return;\n            }\n\n            this.$wrapWithLoading(\n                this.axios({\n                    method: 'PUT',\n                    url: this.settingsUrl,\n                    data: this.settings\n                })\n            ).then((resp) => {\n                this.$notifySuccess();\n                this.relist();\n            });\n        },\n        doRun() {\n            this.$wrapWithLoading(\n                this.axios({\n                    method: 'PUT',\n                    url: this.runUrl\n                })\n            ).then((resp) => {\n                this.$notifySuccess();\n            });\n        }\n    }\n});\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Stations/Automation.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./vue/components/Form/BFormFieldset.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vue/components/Form/BFormFieldset.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_BFormFieldset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BFormFieldset.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BFormFieldset.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_BFormFieldset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BFormFieldset.vue?");

/***/ }),

/***/ "./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BWrappedFormCheckbox.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormCheckbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormCheckbox.vue?");

/***/ }),

/***/ "./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3&":
/*!*************************************************************************************!*\
  !*** ./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormCheckbox_vue_vue_type_template_id_723bfeb3___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormCheckbox_vue_vue_type_template_id_723bfeb3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormCheckbox_vue_vue_type_template_id_723bfeb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3&\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormCheckbox.vue?");

/***/ }),

/***/ "./vue/components/Form/BWrappedFormGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vue/components/Form/BWrappedFormGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BWrappedFormGroup.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormGroup.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormGroup.vue?");

/***/ }),

/***/ "./vue/components/Form/BWrappedFormGroup.vue?vue&type=template&id=e6b2d282&":
/*!**********************************************************************************!*\
  !*** ./vue/components/Form/BWrappedFormGroup.vue?vue&type=template&id=e6b2d282& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormGroup_vue_vue_type_template_id_e6b2d282___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormGroup_vue_vue_type_template_id_e6b2d282___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BWrappedFormGroup_vue_vue_type_template_id_e6b2d282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BWrappedFormGroup.vue?vue&type=template&id=e6b2d282& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormGroup.vue?vue&type=template&id=e6b2d282&\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormGroup.vue?");

/***/ }),

/***/ "./vue/components/Form/VuelidateError.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vue/components/Form/VuelidateError.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_VuelidateError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VuelidateError.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/VuelidateError.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_VuelidateError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/VuelidateError.vue?");

/***/ }),

/***/ "./vue/components/Form/VuelidateError.vue?vue&type=template&id=1ab49bc0&":
/*!*******************************************************************************!*\
  !*** ./vue/components/Form/VuelidateError.vue?vue&type=template&id=1ab49bc0& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuelidateError_vue_vue_type_template_id_1ab49bc0___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuelidateError_vue_vue_type_template_id_1ab49bc0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuelidateError_vue_vue_type_template_id_1ab49bc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VuelidateError.vue?vue&type=template&id=1ab49bc0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/VuelidateError.vue?vue&type=template&id=1ab49bc0&\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/VuelidateError.vue?");

/***/ }),

/***/ "./vue/components/Stations/Automation.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vue/components/Stations/Automation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Automation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Automation.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Stations/Automation.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Automation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Stations/Automation.vue?");

/***/ }),

/***/ "./vue/components/Stations/Automation.vue?vue&type=template&id=f60449b6&":
/*!*******************************************************************************!*\
  !*** ./vue/components/Stations/Automation.vue?vue&type=template&id=f60449b6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Automation_vue_vue_type_template_id_f60449b6___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Automation_vue_vue_type_template_id_f60449b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Automation_vue_vue_type_template_id_f60449b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Automation.vue?vue&type=template&id=f60449b6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Stations/Automation.vue?vue&type=template&id=f60449b6&\");\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Stations/Automation.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormCheckbox.vue?vue&type=template&id=723bfeb3& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-form-group\",\n    _vm._b(\n      {\n        attrs: { \"label-for\": _vm.id, state: _vm.fieldState },\n        scopedSlots: _vm._u(\n          [\n            {\n              key: \"default\",\n              fn: function () {\n                return [\n                  _vm._t(\n                    \"default\",\n                    function () {\n                      return [\n                        _c(\n                          \"b-form-checkbox\",\n                          _vm._b(\n                            {\n                              attrs: { id: _vm.id, name: _vm.name },\n                              model: {\n                                value: _vm.field.$model,\n                                callback: function ($$v) {\n                                  _vm.$set(_vm.field, \"$model\", $$v)\n                                },\n                                expression: \"field.$model\",\n                              },\n                            },\n                            \"b-form-checkbox\",\n                            _vm.inputAttrs,\n                            false\n                          ),\n                          [\n                            _vm._t(\"label\", null, { lang: \"lang_\" + _vm.id }),\n                            _vm._v(\" \"),\n                            _vm.isRequired\n                              ? _c(\"span\", { staticClass: \"text-danger\" }, [\n                                  _c(\n                                    \"span\",\n                                    { attrs: { \"aria-hidden\": \"true\" } },\n                                    [_vm._v(\"*\")]\n                                  ),\n                                  _vm._v(\" \"),\n                                  _c(\"span\", { staticClass: \"sr-only\" }, [\n                                    _vm._v(\"Required\"),\n                                  ]),\n                                ])\n                              : _vm._e(),\n                            _vm._v(\" \"),\n                            _vm.advanced\n                              ? _c(\n                                  \"span\",\n                                  { staticClass: \"badge small badge-primary\" },\n                                  [\n                                    _c(\"translate\", { key: \"badge_advanced\" }, [\n                                      _vm._v(\"Advanced\"),\n                                    ]),\n                                  ],\n                                  1\n                                )\n                              : _vm._e(),\n                          ],\n                          2\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"b-form-invalid-feedback\",\n                          { attrs: { state: _vm.fieldState } },\n                          [\n                            _c(\"vuelidate-error\", {\n                              attrs: { field: _vm.field },\n                            }),\n                          ],\n                          1\n                        ),\n                      ]\n                    },\n                    null,\n                    { id: _vm.id, field: _vm.field, state: _vm.fieldState }\n                  ),\n                ]\n              },\n              proxy: true,\n            },\n            {\n              key: \"description\",\n              fn: function (slotProps) {\n                return [\n                  _vm._t(\n                    \"description\",\n                    null,\n                    { lang: \"lang_\" + _vm.id + \"_desc\" },\n                    slotProps\n                  ),\n                ]\n              },\n            },\n            _vm._l(_vm.filteredScopedSlots, function (_, name) {\n              return {\n                key: name,\n                fn: function (slotData) {\n                  return [_vm._t(name, null, null, slotData)]\n                },\n              }\n            }),\n          ],\n          null,\n          true\n        ),\n      },\n      \"b-form-group\",\n      _vm.$attrs,\n      false\n    ),\n    [\n      _vm._v(\" \"),\n      _vm._v(\" \"),\n      _vm._l(_vm.$slots, function (_, name) {\n        return _vm._t(name, null, { slot: name })\n      }),\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormCheckbox.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormGroup.vue?vue&type=template&id=e6b2d282&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/BWrappedFormGroup.vue?vue&type=template&id=e6b2d282& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"b-form-group\",\n    _vm._b(\n      {\n        attrs: { \"label-for\": _vm.id, state: _vm.fieldState },\n        scopedSlots: _vm._u(\n          [\n            {\n              key: \"default\",\n              fn: function () {\n                return [\n                  _vm._t(\n                    \"default\",\n                    function () {\n                      return [\n                        _vm.inputType === \"textarea\"\n                          ? _c(\n                              \"b-form-textarea\",\n                              _vm._b(\n                                {\n                                  ref: \"input\",\n                                  attrs: {\n                                    id: _vm.id,\n                                    name: _vm.name,\n                                    required: _vm.isRequired,\n                                    number: _vm.isNumeric,\n                                    trim: _vm.inputTrim,\n                                    autofocus: _vm.autofocus,\n                                    state: _vm.fieldState,\n                                  },\n                                  model: {\n                                    value: _vm.field.$model,\n                                    callback: function ($$v) {\n                                      _vm.$set(_vm.field, \"$model\", $$v)\n                                    },\n                                    expression: \"field.$model\",\n                                  },\n                                },\n                                \"b-form-textarea\",\n                                _vm.inputAttrs,\n                                false\n                              )\n                            )\n                          : _c(\n                              \"b-form-input\",\n                              _vm._b(\n                                {\n                                  ref: \"input\",\n                                  attrs: {\n                                    type: _vm.inputType,\n                                    id: _vm.id,\n                                    name: _vm.name,\n                                    required: _vm.isRequired,\n                                    number: _vm.isNumeric,\n                                    trim: _vm.inputTrim,\n                                    autofocus: _vm.autofocus,\n                                    state: _vm.fieldState,\n                                  },\n                                  model: {\n                                    value: _vm.field.$model,\n                                    callback: function ($$v) {\n                                      _vm.$set(_vm.field, \"$model\", $$v)\n                                    },\n                                    expression: \"field.$model\",\n                                  },\n                                },\n                                \"b-form-input\",\n                                _vm.inputAttrs,\n                                false\n                              )\n                            ),\n                      ]\n                    },\n                    null,\n                    { id: _vm.id, field: _vm.field, state: _vm.fieldState }\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"b-form-invalid-feedback\",\n                    { attrs: { state: _vm.fieldState } },\n                    [_c(\"vuelidate-error\", { attrs: { field: _vm.field } })],\n                    1\n                  ),\n                ]\n              },\n              proxy: true,\n            },\n            {\n              key: \"label\",\n              fn: function (slotProps) {\n                return [\n                  _vm._t(\"label\", null, { lang: \"lang_\" + _vm.id }, slotProps),\n                  _vm._v(\" \"),\n                  _vm.isRequired\n                    ? _c(\"span\", { staticClass: \"text-danger\" }, [\n                        _c(\"span\", { attrs: { \"aria-hidden\": \"true\" } }, [\n                          _vm._v(\"*\"),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"span\", { staticClass: \"sr-only\" }, [\n                          _vm._v(\"Required\"),\n                        ]),\n                      ])\n                    : _vm._e(),\n                  _vm._v(\" \"),\n                  _vm.advanced\n                    ? _c(\n                        \"span\",\n                        { staticClass: \"badge small badge-primary\" },\n                        [\n                          _c(\"translate\", { key: \"badge_advanced\" }, [\n                            _vm._v(\"Advanced\"),\n                          ]),\n                        ],\n                        1\n                      )\n                    : _vm._e(),\n                ]\n              },\n            },\n            {\n              key: \"description\",\n              fn: function (slotProps) {\n                return [\n                  _vm._t(\n                    \"description\",\n                    null,\n                    { lang: \"lang_\" + _vm.id + \"_desc\" },\n                    slotProps\n                  ),\n                ]\n              },\n            },\n            _vm._l(_vm.filteredScopedSlots, function (_, name) {\n              return {\n                key: name,\n                fn: function (slotData) {\n                  return [_vm._t(name, null, null, slotData)]\n                },\n              }\n            }),\n          ],\n          null,\n          true\n        ),\n      },\n      \"b-form-group\",\n      _vm.$attrs,\n      false\n    ),\n    [\n      _vm._v(\" \"),\n      _vm._v(\" \"),\n      _vm._v(\" \"),\n      _vm._l(_vm.$slots, function (_, name) {\n        return _vm._t(name, null, { slot: name })\n      }),\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/BWrappedFormGroup.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/VuelidateError.vue?vue&type=template&id=1ab49bc0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Form/VuelidateError.vue?vue&type=template&id=1ab49bc0& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { display: \"contents\" } },\n    _vm._l(_vm.errorMessages, function (message) {\n      return _c(\"div\", [_vm._v(\"\\n        \" + _vm._s(message) + \"\\n    \")])\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Form/VuelidateError.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Stations/Automation.vue?vue&type=template&id=f60449b6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./vue/components/Stations/Automation.vue?vue&type=template&id=f60449b6& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"section\",\n      { staticClass: \"card mb-3\", attrs: { role: \"region\" } },\n      [\n        _c(\n          \"b-card-header\",\n          { attrs: { \"header-bg-variant\": \"primary-dark\" } },\n          [\n            _c(\n              \"h2\",\n              { staticClass: \"card-title\" },\n              [\n                _c(\"translate\", { key: \"lang_hdr_automated_assignment\" }, [\n                  _vm._v(\"Automated Assignment\"),\n                ]),\n              ],\n              1\n            ),\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"card-body\" },\n          [\n            _c(\n              \"p\",\n              { staticClass: \"card-text\" },\n              [\n                _c(\"translate\", { key: \"lang_automated_1\" }, [\n                  _vm._v(\n                    \"Based on the previous performance of your station's songs, AzuraCast can automatically distribute songs evenly among your playlists, placing the highest performing songs in the highest-weighted playlists.\"\n                  ),\n                ]),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"p\",\n              { staticClass: \"card-text\" },\n              [\n                _c(\"translate\", { key: \"lang_automated_2\" }, [\n                  _vm._v(\n                    \"Once you have configured automated assignment, click the button below to run the automated assignment process.\"\n                  ),\n                ]),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"b-button\",\n              {\n                attrs: {\n                  variant: \"warning\",\n                  disabled: !_vm.settings.is_enabled,\n                },\n                on: {\n                  click: function ($event) {\n                    $event.preventDefault()\n                    return _vm.doRun.apply(null, arguments)\n                  },\n                },\n              },\n              [\n                _c(\"translate\", { key: \"lang_btn_run\" }, [\n                  _vm._v(\"Run Automated Assignment\"),\n                ]),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"form\",\n      {\n        staticClass: \"form vue-form\",\n        on: {\n          submit: function ($event) {\n            $event.preventDefault()\n            return _vm.submit.apply(null, arguments)\n          },\n        },\n      },\n      [\n        _c(\n          \"section\",\n          { staticClass: \"card mb-3\", attrs: { role: \"region\" } },\n          [\n            _c(\n              \"b-card-header\",\n              { attrs: { \"header-bg-variant\": \"primary-dark\" } },\n              [\n                _c(\n                  \"h2\",\n                  { staticClass: \"card-title\" },\n                  [\n                    _c(\"translate\", { key: \"lang_hdr_configure\" }, [\n                      _vm._v(\"Configure Automated Assignment\"),\n                    ]),\n                  ],\n                  1\n                ),\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"b-overlay\",\n              { attrs: { variant: \"card\", show: _vm.settingsLoading } },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"card-body\" },\n                  [\n                    _c(\n                      \"b-form-fieldset\",\n                      [\n                        _c(\"b-wrapped-form-checkbox\", {\n                          attrs: {\n                            id: \"edit_form_is_enabled\",\n                            field: _vm.$v.settings.is_enabled,\n                          },\n                          scopedSlots: _vm._u([\n                            {\n                              key: \"label\",\n                              fn: function (ref) {\n                                var lang = ref.lang\n                                return [\n                                  _c(\"translate\", { key: lang }, [\n                                    _vm._v(\"Enable Automated Assignment\"),\n                                  ]),\n                                ]\n                              },\n                            },\n                            {\n                              key: \"description\",\n                              fn: function (ref) {\n                                var lang = ref.lang\n                                return [\n                                  _c(\"translate\", { key: lang }, [\n                                    _vm._v(\n                                      'Allow the system to periodically automatically assign songs to playlists based on their performance. This process will run in the background, and will only run if this option is set to \"Enabled\" and at least one playlist is set to \"Include in Automated Assignment\".'\n                                    ),\n                                  ]),\n                                ]\n                              },\n                            },\n                          ]),\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"b-wrapped-form-group\", {\n                          attrs: {\n                            id: \"edit_form_threshold_days\",\n                            field: _vm.$v.settings.threshold_days,\n                          },\n                          scopedSlots: _vm._u([\n                            {\n                              key: \"label\",\n                              fn: function (ref) {\n                                var lang = ref.lang\n                                return [\n                                  _c(\"translate\", { key: lang }, [\n                                    _vm._v(\n                                      \"Days Between Automated Assignments\"\n                                    ),\n                                  ]),\n                                ]\n                              },\n                            },\n                            {\n                              key: \"description\",\n                              fn: function (ref) {\n                                var lang = ref.lang\n                                return [\n                                  _c(\"translate\", { key: lang }, [\n                                    _vm._v(\n                                      \"Based on this setting, the system will automatically reassign songs every (this) days using data from the previous (this) days.\"\n                                    ),\n                                  ]),\n                                ]\n                              },\n                            },\n                            {\n                              key: \"default\",\n                              fn: function (props) {\n                                return [\n                                  _c(\"b-form-radio-group\", {\n                                    attrs: {\n                                      stacked: \"\",\n                                      id: props.id,\n                                      options: _vm.thresholdDaysOptions,\n                                    },\n                                    model: {\n                                      value: props.field.$model,\n                                      callback: function ($$v) {\n                                        _vm.$set(props.field, \"$model\", $$v)\n                                      },\n                                      expression: \"props.field.$model\",\n                                    },\n                                  }),\n                                ]\n                              },\n                            },\n                          ]),\n                        }),\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"b-button\",\n                      {\n                        attrs: {\n                          size: \"lg\",\n                          type: \"submit\",\n                          variant: \"primary\",\n                          disabled: _vm.$v.settings.$invalid,\n                        },\n                      },\n                      [\n                        _vm._t(\"submitButtonName\", function () {\n                          return [\n                            _c(\"translate\", { key: \"lang_btn_save_changes\" }, [\n                              _vm._v(\"Save Changes\"),\n                            ]),\n                          ]\n                        }),\n                      ],\n                      2\n                    ),\n                  ],\n                  1\n                ),\n              ]\n            ),\n          ],\n          1\n        ),\n      ]\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/components/Stations/Automation.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./vue/base.js":
/*!*********************!*\
  !*** ./vue/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n/* harmony import */ var vue_gettext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-gettext */ \"./node_modules/vue-gettext/dist/vue-gettext.js\");\n/* harmony import */ var vue_gettext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_gettext__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_locale_translations_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/locale/translations.json */ \"../resources/locale/translations.json\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Configure localization\n  vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use((vue_gettext__WEBPACK_IMPORTED_MODULE_2___default()), {\n    defaultLanguage: 'en_US',\n    translations: _resources_locale_translations_json__WEBPACK_IMPORTED_MODULE_3__,\n    silent: true\n  });\n\n  if (typeof App.locale !== 'undefined') {\n    vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.language = App.locale;\n  }\n\n  // Configure auto-CSRF on requests\n  if (typeof App.api_csrf !== 'undefined') {\n    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common[\"X-API-CSRF\"]) = App.api_csrf;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use(vue_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (axios__WEBPACK_IMPORTED_MODULE_0___default()));\n\n  vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].prototype.$eventHub = new vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n});\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(component) {\n  return function (el, props) {\n    return new vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      el: el,\n      created () {\n        let handleAxiosError = (error) => {\n          let notifyMessage = this.$gettext('An error occurred and your request could not be completed.');\n          if (error.response) {\n            // Request made and server responded\n            notifyMessage = error.response.data.message;\n            console.error(notifyMessage);\n          } else if (error.request) {\n            // The request was made but no response was received\n            console.error(error.request);\n          } else {\n            // Something happened in setting up the request that triggered an Error\n            console.error('Error', error.message);\n          }\n\n          if (typeof this.$notifyError === 'function') {\n            this.$notifyError(notifyMessage);\n          }\n        };\n\n        axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use((config) => {\n          return config;\n        }, (error) => {\n          handleAxiosError(error);\n          return Promise.reject(error);\n        });\n\n        axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use((response) => {\n          return response;\n        }, (error) => {\n          handleAxiosError(error);\n          return Promise.reject(error);\n        });\n      },\n      render: createElement => createElement(component, { props: props })\n    });\n  };\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/base.js?");

/***/ }),

/***/ "./vue/functions/isObject.js":
/*!***********************************!*\
  !*** ./vue/functions/isObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isObject)\n/* harmony export */ });\nfunction isObject(value) {\n    return typeof value !== \"object\"\n        && (Object(value) === value)\n        && !Array.isArray(value);\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/functions/isObject.js?");

/***/ }),

/***/ "./vue/functions/mergeExisting.js":
/*!****************************************!*\
  !*** ./vue/functions/mergeExisting.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mergeExisting)\n/* harmony export */ });\n/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ \"./vue/functions/isObject.js\");\n\n\n/*\n * A \"deep\" merge that only merges items from the source into the destination that already exist in the destination.\n * Useful for merging in form values with API returns.\n */\nfunction mergeExisting(dest, source) {\n    let ret = {};\n    for (const destKey in dest) {\n        if (destKey in source) {\n            const destVal = dest[destKey];\n            const sourceVal = source[destKey];\n\n            if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sourceVal) && (0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(destVal)) {\n                ret[destKey] = mergeExisting(destVal, sourceVal);\n            } else {\n                ret[destKey] = sourceVal;\n            }\n        } else {\n            ret[destKey] = dest[destKey];\n        }\n    }\n    return ret;\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/functions/mergeExisting.js?");

/***/ }),

/***/ "./vue/pages/Stations/Automation.js":
/*!******************************************!*\
  !*** ./vue/pages/Stations/Automation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/base.js */ \"./vue/base.js\");\n/* harmony import */ var _vendor_bootstrapVue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/vendor/bootstrapVue.js */ \"./vue/vendor/bootstrapVue.js\");\n/* harmony import */ var _components_Stations_Automation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/Stations/Automation.vue */ \"./vue/components/Stations/Automation.vue\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_base_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_components_Stations_Automation_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/pages/Stations/Automation.js?");

/***/ }),

/***/ "./vue/vendor/bootstrapVue.js":
/*!************************************!*\
  !*** ./vue/vendor/bootstrapVue.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ \"./node_modules/bootstrap-vue/esm/index.js\");\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ \"./node_modules/bootstrap-vue/dist/bootstrap-vue.css\");\n/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__.BootstrapVue);\n\nconst BootstrapVueNotifiers = {\n    install(Vue, opts) {\n        Vue.prototype.$notify = function (message = null, options = {}) {\n            if (!!document.hidden) {\n                return;\n            }\n        \n            const defaults = {\n                variant: 'default',\n                toaster: 'b-toaster-top-right',\n                autoHideDelay: 3000,\n                solid: true\n            };\n\n            this.$bvToast.toast(message, {...defaults, ...options});\n        };\n\n        Vue.prototype.$notifyError = function (message = null, options = {}) {\n            if (message === null) {\n                message = this.$gettext('An error occurred and your request could not be completed.');\n            }\n\n            const defaults = {\n                variant: 'danger',\n                title: this.$gettext('Error')\n            };\n\n            this.$notify(message, {...defaults, ...options});\n\n            return message;\n        };\n\n        Vue.prototype.$notifySuccess = function (message = null, options = {}) {\n            if (message === null) {\n                message = this.$gettext('Changes saved.');\n            }\n\n            const defaults = {\n                variant: 'success',\n                title: this.$gettext('Success')\n            };\n\n            this.$notify(message, {...defaults, ...options});\n\n            return message;\n        };\n\n        const LOADING_TOAST_ID = 'toast-loading';\n\n        Vue.prototype.$showLoading = function (message = null, options = {}) {\n            if (message === null) {\n                message = this.$gettext('Applying changes...');\n            }\n\n            const defaults = {\n                id: LOADING_TOAST_ID,\n                variant: 'warning',\n                title: this.$gettext('Please wait...'),\n                autoHideDelay: 10000,\n                isStatus: true\n            };\n\n            this.$notify(message, {...defaults, ...options});\n            return message;\n        };\n\n        Vue.prototype.$hideLoading = function () {\n            this.$bvToast.hide(LOADING_TOAST_ID);\n        };\n\n        let $isAxiosLoading = false;\n        let $axiosLoadCount = 0;\n\n        Vue.prototype.$setLoading = function (isLoading) {\n            let prevIsLoading = $isAxiosLoading;\n            if (isLoading) {\n                $axiosLoadCount++;\n                $isAxiosLoading = true;\n            } else if ($axiosLoadCount > 0) {\n                $axiosLoadCount--;\n                $isAxiosLoading = ($axiosLoadCount > 0);\n            }\n\n            // Handle state changes\n            if (!prevIsLoading && $isAxiosLoading) {\n                this.$showLoading();\n            } else if (prevIsLoading && !$isAxiosLoading) {\n                this.$hideLoading();\n            }\n        };\n\n        Vue.prototype.$wrapWithLoading = function (promise) {\n            this.$setLoading(true);\n\n            promise.finally(() => {\n                this.$setLoading(false);\n            });\n\n            return promise;\n        };\n    }\n};\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(BootstrapVueNotifiers);\n\n\n//# sourceURL=webpack://%5Bname%5D/./vue/vendor/bootstrapVue.js?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://%5Bname%5D/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_width=%2527101%2527_height=%2527101%2527_view-box=%25270_0_101_101%2527_preserveAspectRatio=%2527none%2527%253e%253cpath_fill=%2527black%2527_d=%2527M51_1l25_23_24_22H1l25-22z%2527/%253e%253cpath_fill=%2527black%2527_opacity=%2527.3%2527_d=%2527M51_101l25-23_24-22H1l25_22z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27black%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27black%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27black%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://%5Bname%5D/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_width=%2527101%2527_height=%2527101%2527_view-box=%25270_0_101_101%2527_preserveAspectRatio=%2527none%2527%253e%253cpath_fill=%2527black%2527_opacity=%2527.3%2527_d=%2527M51_1l25_23_24_22H1l25-22z%2527/%253e%253cpath_fill=%2527black%2527_d=%2527M51_101l25-23_24-22H1l25_22z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27black%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://%5Bname%5D/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_width=%2527101%2527_height=%2527101%2527_view-box=%25270_0_101_101%2527_preserveAspectRatio=%2527none%2527%253e%253cpath_fill=%2527black%2527_opacity=%2527.3%2527_d=%2527M51_1l25_23_24_22H1l25-22zM51_101l25-23_24-22H1l25_22z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://%5Bname%5D/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_width=%2527101%2527_height=%2527101%2527_view-box=%25270_0_101_101%2527_preserveAspectRatio=%2527none%2527%253e%253cpath_fill=%2527white%2527_d=%2527M51_1l25_23_24_22H1l25-22z%2527/%253e%253cpath_fill=%2527white%2527_opacity=%2527.3%2527_d=%2527M51_101l25-23_24-22H1l25_22z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27white%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27white%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22z%27/%3e%3cpath fill=%27white%27 d=%27M51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://%5Bname%5D/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_width=%2527101%2527_height=%2527101%2527_view-box=%25270_0_101_101%2527_preserveAspectRatio=%2527none%2527%253e%253cpath_fill=%2527white%2527_opacity=%2527.3%2527_d=%2527M51_1l25_23_24_22H1l25-22z%2527/%253e%253cpath_fill=%2527white%2527_d=%2527M51_101l25-23_24-22H1l25_22z%2527/%253e%253c/svg%253e?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27101%27 height=%27101%27 view-box=%270 0 101 101%27 preserveAspectRatio=%27none%27%3e%3cpath fill=%27white%27 opacity=%27.3%27 d=%27M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack://%5Bname%5D/data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_width=%2527101%2527_height=%2527101%2527_view-box=%25270_0_101_101%2527_preserveAspectRatio=%2527none%2527%253e%253cpath_fill=%2527white%2527_opacity=%2527.3%2527_d=%2527M51_1l25_23_24_22H1l25-22zM51_101l25-23_24-22H1l25_22z%2527/%253e%253c/svg%253e?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"StationsAutomation": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["translations","vendor-vue","vendor-axios","vendor-vue-gettext","vendor-vue-style-loader","vendor-css-loader","vendor-vue-loader","vendor-vue-axios","vendor-bootstrap-vue","vendor-popper.js","vendor-portal-vue","vendor-vue-functional-data-merge","vendor-lodash","vendor-vuelidate"], () => (__webpack_require__("./vue/pages/Stations/Automation.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	StationsAutomation = __webpack_exports__;
/******/ 	
/******/ })()
;
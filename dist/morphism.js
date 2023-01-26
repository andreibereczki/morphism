!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Morphism=t():e.Morphism=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Formatter:()=>a.Formatter,IValidation:()=>o.IValidation,Mapper:()=>r.Mapper,Reporter:()=>V,Rule:()=>i.Rule,SCHEMA_OPTIONS_SYMBOL:()=>p,Schema:()=>r.Schema,SchemaOptions:()=>n.SchemaOptions,StrictSchema:()=>r.StrictSchema,Validation:()=>K,ValidatorError:()=>_,createSchema:()=>F,default:()=>Z,morph:()=>W,morphism:()=>U,reporter:()=>T,toClassObject:()=>G,toJSObject:()=>Y});var r={};e.r(r);var a={};e.r(a),e.d(a,{Sg:()=>j,bR:()=>V,p8:()=>S,qf:()=>E,E7:()=>T,z_:()=>A});var n={};e.r(n),e.d(n,{uk:()=>q,Ew:()=>F});var o={};e.r(o),e.d(o,{i:()=>K});var i={};function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e.r(i);var p=Symbol("SchemaOptions");function l(e){return m(e)&&(e.hasOwnProperty("fn")||e.hasOwnProperty("path"))}function d(e){return g(e)}function h(e){return Array.isArray(e)&&e.every(d)}var v=(e,t)=>e.reduce(((e,r)=>(O(e,r,w(t,r)),e)),{});function f(e){return void 0===e}function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function g(e){return"string"==typeof e||e instanceof String}function y(e){return"function"==typeof e}function b(e){if(Promise&&Promise.resolve)return Promise.resolve(e)==e;throw new Error("Promise not supported in your environment")}function w(e,t){for(var r=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,n=r.length;a<n;++a){var o=r[a];if(!m(e)||!(o in e))return;e=e[o]}return e}function O(e,t,r,a){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return O(e,t.split(".").map(x),r,a);var n=t[0],o=function(e,t){if(function(e,t){return"number"==typeof t&&Array.isArray(e)||function(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}(e,t)}(e,t))return e[t]}(e,n);return 1===t.length?(void 0!==o&&a||(e[n]=r),o):(void 0===o&&("number"==typeof t[1]?e[n]=[]:e[n]={}),O(e[n],t.slice(1),r,a))}function x(e){var t=parseInt(e);return t.toString()===e?t:e}function P(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}var j=Symbol("errors");class S extends Error{constructor(e){super("Invalid value supplied at property <".concat(e.targetProperty,">.")),this.targetProperty=void 0,this.innerError=void 0,this.innerError=e.innerError}}class E extends Error{constructor(e,t){super(),this.errors=void 0,this.reporter=void 0,this.target=void 0,this.errors=new Set,this.reporter=e,this.target=t}addError(e){this.errors.add(e);var t=this.reporter.report(this.target);t&&(this.message=t.join("\n"))}}function A(e){return e&&e[j]&&e[j].errors.size>0}function M(e){var{message:t,innerError:r}=e;return"".concat(t," Reason: ").concat(r.message)}class V{constructor(e=M){this.formatter=e}report(e){var t=this.extractErrors(e);return t?[...t.errors.values()].map(this.formatter):null}extractErrors(e){return A(e)?e[j]:null}}var R,T=new V;class _ extends Error{constructor(e){super(e.expect),this.value=void 0,this.expect=void 0,this.value=e.value,this.expect=e.expect}}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e,t){return t&&!P(t)&&(e[p]=t),e}!function(e){e.Root="Root",e.Property="Property",e.ActionFunction="ActionFunction",e.ActionAggregator="ActionAggregator",e.ActionString="ActionString",e.ActionSelector="ActionSelector"}(R||(R={}));class q{constructor(e){this.schemaOptions=void 0,this.root=void 0,this.schema=void 0,this.schema=e,this.schemaOptions=q.getSchemaOptions(this.schema),this.root={data:{targetPropertyPath:"",propertyName:"MorphismTreeRoot",action:null,kind:R.Root},parent:null,children:[]},e&&this.parseSchema(e)}static getSchemaOptions(e){var t=e?e[p]:void 0;return k(k({},{class:{automapping:!0},undefinedValues:{strip:!1}}),t)}parseSchema(e,t,r){if((g(a=e)||y(a)||l(a)||h(a))&&t)this.add({propertyName:t,action:e},r),r=r?"".concat(r,".").concat(t):t;else{if(t){if(m(e)&&P(e))throw new Error("A value of a schema property can't be an empty object. Value ".concat(JSON.stringify(e)," found for property ").concat(t));this.add({propertyName:t,action:e},r),r=r?"".concat(r,".").concat(t):t}Array.isArray(e)?e.forEach(((e,t)=>{this.parseSchema(e,t.toString(),r)})):m(e)&&Object.keys(e).forEach((t=>{this.parseSchema(e[t],t,r)}))}var a}*traverseBFS(){var e=[];for(e.push(this.root);e.length>0;){var t=e.shift();if(t){for(var r=0,a=t.children.length;r<a;r++)e.push(t.children[r]);t.data.kind!==R.Root&&(yield t)}}}add(e,t){var r=this.getActionKind(e),a={data:k(k({},e),{},{kind:r,targetPropertyPath:""}),parent:null,children:[]};if(a.data.preparedAction=this.getPreparedAction(a.data),t)for(var n of this.traverseBFS())n.data.targetPropertyPath===t&&(a.parent=n,a.data.targetPropertyPath="".concat(n.data.targetPropertyPath,".").concat(a.data.propertyName),n.children.push(a));else a.parent=this.root,a.data.targetPropertyPath=a.data.propertyName,this.root.children.push(a)}getActionKind(e){if(d(e.action))return R.ActionString;if(y(e.action))return R.ActionFunction;if(l(e.action))return R.ActionSelector;if(h(e.action))return R.ActionAggregator;if(m(e.action))return R.Property;throw new Error("The action specified for ".concat(e.propertyName," is not supported."))}getPreparedAction(e){var{propertyName:t,action:r,kind:a}=e;return d(r)?e=>{var{object:t}=e;return w(t,r)}:y(r)?e=>{var{object:t,items:a,objectToCompute:n}=e;return r.call(void 0,t,a,n)}:h(r)?e=>{var{object:t}=e;return v(r,t)}:l(r)?e=>{var a,{object:n,items:o,objectToCompute:i}=e;if(r.path?Array.isArray(r.path)?a=v(r.path,n):g(r.path)&&(a=w(n,r.path)):a=n,r.fn)try{a=r.fn.call(void 0,a,n,o,i)}catch(e){throw e.message="Unable to set target property [".concat(t,"].\n            \n An error occured when applying [").concat(r.fn.name,"] on property [").concat(r.path,"]\n            \n Internal error: ").concat(e.message),e}if(r.validation){var c=r.validation({value:a});this.processValidationResult(c,t,i),a=c.value}return a}:a===R.Property?null:void 0}processValidationResult(e,t,r){if(e.error){var a=e.error;if(!(a instanceof _))throw a;this.addErrorToTarget(t,a,r)}}addErrorToTarget(e,t,r){var a=new S({targetProperty:e,innerError:t});A(r)||(this.schemaOptions.validation&&this.schemaOptions.validation.reporter?r[j]=new E(this.schemaOptions.validation.reporter,r):r[j]=new E(T,r)),r[j].addError(a)}}function I(e){return(t,r,a)=>{var n=a.value;return"function"==typeof n&&(a.value=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=n.apply(this,r);return b(o)?Promise.resolve(o).then((t=>e(t))):e(o)}),a}}class C{constructor(e){this.data=e,this.next=void 0,this.head=void 0,this.tail=void 0,this.next=null,this.head=this,this.tail=this}append(e){this.tail.next=new C(e),this.tail=this.tail.next}*values(){for(;null!==this.head;)yield this.head.data,this.head=this.head.next}}function z(e,t,r){return{name:e,expect:t,validate:e=>r.test(e.value)}}var B={get:(e,t)=>{if(t in e)return e[t];if(J.has(t))return J.get(t);throw new Error("The validator ".concat(t,"() does not exist. Did you forget to call Validation.addValidator(name, validator)"))}},J=new Map,K=new Proxy({addValidator:(e,t)=>{J.set(e,t)}},B);function $(e,t,r,a){var n=t.schemaOptions,o=[];for(var i of t.traverseBFS()){var{preparedAction:c,targetPropertyPath:s}=i.data;c&&o.push({targetPropertyPath:s,preparedAction:c({object:e,objectToCompute:a,items:r})})}return o.reduce(((e,t)=>{var r,a,o=(r=w(e,t.targetPropertyPath),f(a=t.preparedAction)?f(r)?void 0:r:a);return void 0===o?(n&&n.undefinedValues&&n.undefinedValues.strip?n.undefinedValues.default&&O(e,t.targetPropertyPath,n.undefinedValues.default(e,t.targetPropertyPath)):O(e,t.targetPropertyPath,o),H(n,e),e):(O(e,t.targetPropertyPath,o),H(n,e),e)}),a)}function H(e,t){var r;if(e&&e.validation&&e.validation.throw&&A(t)&&(r=e.validation.reporter?e.validation.reporter.extractErrors(t):T.extractErrors(t)))throw r}function L(e,t){var r,a=q.getSchemaOptions(e);if(t&&a.class&&a.class.automapping){var n=function(e,t){var r,a=Object.keys(new e),n=(r=a,a.reduce(((e,t,a)=>s(s({},e),{},{[t]:r[a]})),{}));return Object.assign(n,t)}(t,e);r=new q(n)}else r=new q(e);return e=>{if(!e)return e;if(Array.isArray(e))return e.map((a=>{if(t){var n=new t;return $(a,r,e,n)}return $(a,r,e,{})}));var a=e;if(t){var n=new t;return $(a,r,[a],n)}return $(a,r,[a],{})}}function U(e,t,r){switch(arguments.length){case 1:return L(e);case 2:return L(e)(t);case 3:if(r)return null!==t?L(e,r)(t):L(e,r);throw new Error("When using morphism(schema, items, type), type should be defined but value received is ".concat(r))}}function W(e,t){return I(L(e,t))}function Y(e){return I(L(e))}function G(e,t){return I(L(e,t))}K.addValidator("string",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new C({name:"string",expect:e=>"Expected value to be a <string> but received <".concat(e.value,">"),validate:t=>!!g(t.value)||!!e.convert&&(t.value=String(t.value),!0)}),r=e=>{for(var r=e,a=t.values(),n=a.next(),o={};!r.error&&!n.done;){var i=n.value;if(i.name in o)throw new Error("Rule ".concat(i.name," has already been used"));o[i.name]=i,i.validate(r)||(r.error=new _({expect:g(i.expect)?i.expect:i.expect(r),value:r.value})),n=a.next()}return r},a={min:e=>(t.append({name:"min",expect:t=>"Expected value to be greater or equal than <".concat(e,"> but received <").concat(t.value,">"),validate:t=>t.value.length>=e}),n),max:e=>(t.append({name:"max",expect:t=>"Expected value to be less or equal than <".concat(e,"> but received <").concat(t.value,">"),validate:t=>t.value.length<=e}),n),size:e=>(t.append({name:"length",expect:t=>"Expected value to be length of <".concat(e,"> but received <").concat(t.value,">"),validate:t=>t.value.length===e}),n),regex:e=>{var r=z("regex",(t=>"Expected value to match pattern: ".concat(e," but received <").concat(t.value,">")),e);return t.append(r),n},alphanum:()=>{var e=z("regex",(e=>"Expected value to contain only alphanumeric characters but received <".concat(e.value,">")),/^[a-z0-9]+$/i);return t.append(e),n}},n=Object.assign(r,a);return n})),K.addValidator("number",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new C({name:"number",expect:e=>"Expected value to be a <number> but received <".concat(e.value,">"),validate:t=>e.convert?(t.value=+t.value,!isNaN(t.value)):"number"==typeof t.value}),r=e=>{for(var r=e,a=t.values(),n=a.next(),o={};!r.error&&!n.done;){var i=n.value;if(i.name in o)throw new Error("Rule ".concat(i.name," has already been used"));o[i.name]=i,i.validate(r)||(r.error=new _({expect:g(i.expect)?i.expect:i.expect(r),value:r.value})),n=a.next()}return r},a={min:e=>(t.append({name:"min",expect:"value to be greater or equal than ".concat(e),validate:t=>t.value>=e}),n),max:e=>(t.append({name:"max",expect:"value to be less or equal than ".concat(e),validate:t=>t.value<=e}),n)},n=Object.assign(r,a);return n})),K.addValidator("boolean",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new C({name:"boolean",expect:e=>"Expected value to be a <boolean> but received <".concat(e.value,">"),validate:t=>e.convert?"boolean"==typeof t.value?t.value:/true/i.test(t.value)?(t.value=!0,!0):!!/false/i.test(t.value)&&(t.value=!1,!0):"boolean"==typeof t.value}),r=e=>{for(var r=e,a=t.values(),n=a.next(),o={};!r.error&&!n.done;){var i=n.value;if(i.name in o)throw new Error("Rule ".concat(i.name," has already been used"));o[i.name]=i,i.validate(r)||(r.error=new _({expect:g(i.expect)?i.expect:i.expect(r),value:r.value})),n=a.next()}return r},a={},n=Object.assign(r,a);return n}));var Q=new class{constructor(){this._registry=null,this._registry={cache:new Map}}register(e,t){if(!e&&!t)throw new Error("type paramater is required when you register a mapping");if(this.exists(e))throw new Error("A mapper for ".concat(e.name," has already been registered"));var r;return r=U(t||{},null,e),this._registry.cache.set(e,r),r}map(e,t){if(!this.exists(e)){var r=this.register(e);if(void 0===t)return r}return this.getMapper(e)(t)}getMapper(e){return this._registry.cache.get(e)}setMapper(e,t){if(t){if(this.exists(e)){var r=U(t,null,e);return this._registry.cache.set(e,r),r}throw new Error("The type ".concat(e.name," is not registered. Register it using `Mophism.register(").concat(e.name,", schema)`"))}throw new Error("The schema must be an Object. Found ".concat(t))}deleteMapper(e){return this._registry.cache.delete(e)}exists(e){return this._registry.cache.has(e)}get mappers(){return this._registry.cache}},X=U;X.register=(e,t)=>Q.register(e,t),X.map=(e,t)=>Q.map(e,t),X.getMapper=e=>Q.getMapper(e),X.setMapper=(e,t)=>Q.setMapper(e,t),X.deleteMapper=e=>Q.deleteMapper(e),X.mappers=Q.mappers;const Z=X;return t})()}));
//# sourceMappingURL=morphism.map
function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GTwx:function(e,n,t){"use strict";t.r(n),t.d(n,"UserCreationModule",(function(){return B}));var r=t("ofXK"),i=t("tyNb"),o=t("3Pt+"),s=t("y1cd"),c=t("fXoL"),a=t("kmKP"),l=t("SaRM"),u=t("mAmA");function d(e,n){if(1&e&&(c.Ub(0,"option",18),c.Jc(1),c.kc(2,"uppercase"),c.Tb()),2&e){var t=n.$implicit;c.pc("value",t),c.Bb(1),c.Kc(c.lc(2,2,t))}}function b(e,n){1&e&&(c.Ub(0,"label"),c.Jc(1,"ACCESS CONTROLS"),c.Tb())}function f(e,n){if(1&e){var t=c.Vb();c.Ub(0,"label",21),c.Ub(1,"input",22),c.gc("change",(function(e){c.Ac(t);var r=n.$implicit;return c.jc(3).onChange(e,r)})),c.Tb(),c.Ub(2,"span",23),c.Jc(3),c.Tb(),c.Tb()}if(2&e){var r=n.$implicit;c.Bb(1),c.pc("id",r.title),c.Bb(2),c.Kc(r.title)}}function p(e,n){if(1&e&&(c.Ub(0,"div",19),c.Hc(1,f,4,2,"label",20),c.Tb()),2&e){var t=c.jc(2);c.Bb(1),c.pc("ngForOf",t.accessControls)}}function h(e,n){1&e&&c.Qb(0,"span",24)}function m(e,n){if(1&e&&(c.Ub(0,"span"),c.Jc(1),c.Tb()),2&e){var t=c.jc(2);c.Bb(1),c.Kc(t.submitButtonText)}}function g(e,n){if(1&e){var t=c.Vb();c.Ub(0,"div",3),c.Ub(1,"div",4),c.Jc(2," Admin / User Creation "),c.Tb(),c.Ub(3,"div",5),c.Ub(4,"form",6),c.gc("ngSubmit",(function(){return c.Ac(t),c.jc().createUser()})),c.Ub(5,"div",7),c.Ub(6,"label",8),c.Jc(7,"USER ID"),c.Tb(),c.Ub(8,"div",9),c.Qb(9,"input",10),c.Tb(),c.Tb(),c.Ub(10,"div",7),c.Ub(11,"label",11),c.Jc(12,"ROLE"),c.Tb(),c.Ub(13,"select",12),c.gc("change",(function(){return c.Ac(t),c.jc().onRoleChanged()})),c.Hc(14,d,3,4,"option",13),c.Tb(),c.Tb(),c.Hc(15,b,2,0,"label",14),c.Hc(16,p,2,1,"div",15),c.Ub(17,"button",16),c.Hc(18,h,1,0,"span",17),c.Hc(19,m,2,1,"span",14),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.jc();c.Bb(4),c.pc("formGroup",r.superAdminForm),c.Bb(10),c.pc("ngForOf",r.userRoles),c.Bb(1),c.pc("ngIf","User"===r.superAdminFieldControls.userRole.value),c.Bb(1),c.pc("ngIf","User"===r.superAdminFieldControls.userRole.value),c.Bb(1),c.pc("disabled",r.superAdminForm.invalid||"User"===r.superAdminFieldControls.userRole.value&&0===r.selectedMenuList.length||r.loading),c.Bb(1),c.pc("ngIf",r.loading),c.Bb(1),c.pc("ngIf",!r.loading)}}function v(e,n){if(1&e){var t=c.Vb();c.Ub(0,"label",27),c.Ub(1,"input",28),c.gc("change",(function(e){c.Ac(t);var r=n.$implicit;return c.jc(2).onChange(e,r)})),c.Tb(),c.Ub(2,"span",23),c.Jc(3),c.Tb(),c.Tb()}if(2&e){var r=n.$implicit;c.Bb(1),c.pc("id",r.title),c.Bb(2),c.Kc(r.title)}}function U(e,n){1&e&&c.Qb(0,"span",24)}function C(e,n){if(1&e&&(c.Ub(0,"span"),c.Jc(1),c.Tb()),2&e){var t=c.jc(2);c.Bb(1),c.Kc(t.submitButtonText)}}function T(e,n){if(1&e){var t=c.Vb();c.Ub(0,"div",3),c.Ub(1,"div",4),c.Jc(2," User Creation "),c.Tb(),c.Ub(3,"div",5),c.Ub(4,"form",6),c.gc("ngSubmit",(function(){return c.Ac(t),c.jc().createUser()})),c.Ub(5,"div",7),c.Ub(6,"label",8),c.Jc(7,"USER ID"),c.Tb(),c.Ub(8,"div",9),c.Qb(9,"input",10),c.Tb(),c.Tb(),c.Ub(10,"label"),c.Jc(11,"ACCESS CONTROLS"),c.Tb(),c.Ub(12,"div",25),c.Hc(13,v,4,2,"label",26),c.Tb(),c.Ub(14,"button",16),c.Hc(15,U,1,0,"span",17),c.Hc(16,C,2,1,"span",14),c.Tb(),c.Tb(),c.Tb(),c.Tb()}if(2&e){var r=c.jc();c.Bb(4),c.pc("formGroup",r.adminForm),c.Bb(9),c.pc("ngForOf",r.accessControls),c.Bb(1),c.pc("disabled",r.adminForm.invalid||0===r.selectedMenuList.length||r.loading),c.Bb(1),c.pc("ngIf",r.loading),c.Bb(1),c.pc("ngIf",!r.loading)}}var A,R,M,S=[{path:"",component:(A=function(){function e(n,t,r,i){_classCallCheck(this,e),this.formBuilder=n,this.userService=t,this.referenceService=r,this.toasterService=i,this.submitButtonText=s.b.SUBMIT_BUTTON_TEXT,this.loading=!1,this.userRoles=Object.values(s.h).filter((function(e){return e!==s.h.SUPER_ADMIN})),this.accessControls=[],this.selectedMenuList=[],this.superAdminForm=this.formBuilder.group({userId:["",[o.u.required]],userRole:[s.h.ADMIN,o.u.required],accessMenus:[""]}),this.adminForm=this.formBuilder.group({userId:["",[o.u.required]],userRole:[s.h.USER],accessMenus:["",o.u.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.currentUserRole=this.userService.currentUserValue.roleName,this.accessControls=this.referenceService.getAvailableAccessControls()}},{key:"onRoleChanged",value:function(){this.superAdminFieldControls.userRole.value===s.h.USER?(this.superAdminFieldControls.accessMenus.setValidators(o.u.required),this.superAdminForm.updateValueAndValidity()):(this.superAdminFieldControls.accessMenus.setValidators(null),this.superAdminForm.updateValueAndValidity()),this.superAdminForm.patchValue({accessMenus:null}),this.selectedMenuList=[]}},{key:"onChange",value:function(e,n){if(e.target.checked)this.selectedMenuList.push(n.value);else{var t=this.selectedMenuList.findIndex((function(e){return e===n.value}));this.selectedMenuList.splice(t,1)}this.validate()}},{key:"validate",value:function(){var e=this.selectedMenuList.find((function(e){return 3===e})),n=this.selectedMenuList.find((function(e){return 4===e})),t=document.getElementById(s.d.MARKETING_MAKER),r=document.getElementById(s.d.MARKETING_CHECKER);e&&!n?r.setAttribute("disabled","true"):n&&!e?t.setAttribute("disabled","true"):(t.removeAttribute("disabled"),r.removeAttribute("disabled"))}},{key:"createUser",value:function(){var e=this;this.loading=!0,this.userService.createUser(this.currentUserRole===s.h.SUPER_ADMIN?this.superAdminFieldControls.userId.value:this.adminFieldControls.userId.value,this.currentUserRole===s.h.SUPER_ADMIN?this.superAdminFieldControls.userRole.value:this.adminFieldControls.userRole.value,Number(this.userService.currentUserValue.userId),this.selectedMenuList).subscribe((function(n){var t=n.ProcessVariables.status,r=n.ProcessVariables.message,i=void 0===r?{}:r;t?(e.toasterService.showSuccess(s.j.CREATE_USER_SUCCESS),e.superAdminForm.reset(),e.adminForm.reset(),e.loading=!1):(e.loading=!1,e.toasterService.showError(i.value))}),(function(n){e.loading=!1,e.toasterService.showError(n)}))}},{key:"superAdminFieldControls",get:function(){return this.superAdminForm.controls}},{key:"adminFieldControls",get:function(){return this.adminForm.controls}}]),e}(),A.\u0275fac=function(e){return new(e||A)(c.Pb(o.c),c.Pb(a.a),c.Pb(l.a),c.Pb(u.a))},A.\u0275cmp=c.Jb({type:A,selectors:[["app-user-creation"]],decls:6,vars:3,consts:[[1,"main"],[1,"container"],["class","user shadow-lg",4,"ngIf"],[1,"user","shadow-lg"],[1,"card-header","text-center"],[1,"p-4"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","userId"],[1,"input-group"],["type","text","formControlName","userId","id","userId","placeholder","Eg: USER0001","autocomplete","off","autofocus","",1,"form-control"],["for","role"],["formControlName","userRole","id","role",1,"custom-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","row d-flex checkbox-container",4,"ngIf"],[1,"shadow",3,"disabled"],["class","spinner-border","style","width: 2rem; height: 2rem;","aria-hidden","true",4,"ngIf"],[3,"value"],[1,"row","d-flex","checkbox-container"],["class","col-6 checkbox-inline",4,"ngFor","ngForOf"],[1,"col-6","checkbox-inline"],["type","checkbox","formControlName","accessMenus",1,"mx-1",3,"id","change"],[1,"checkbox-title"],["aria-hidden","true",1,"spinner-border",2,"width","2rem","height","2rem"],[1,"row","d-flex"],["class","col-6 checkbox-inline container-checkbox",4,"ngFor","ngForOf"],[1,"col-6","checkbox-inline","container-checkbox"],["type","checkbox","formControlName","accessMenus",1,"mx-1","checkbox-input",3,"id","change"]],template:function(e,n){1&e&&(c.Ub(0,"div",0),c.Ub(1,"h2"),c.Jc(2),c.Tb(),c.Ub(3,"div",1),c.Hc(4,g,20,7,"div",2),c.Hc(5,T,17,5,"div",2),c.Tb(),c.Tb()),2&e&&(c.Bb(2),c.Lc(" ","Super Admin"===n.currentUserRole?"Admin / User Creation":"User Creation"," "),c.Bb(2),c.pc("ngIf","Super Admin"===n.currentUserRole),c.Bb(1),c.pc("ngIf","Admin"===n.currentUserRole))},directives:[r.m,o.w,o.n,o.h,o.b,o.m,o.f,o.t,r.l,o.q,o.v,o.a],pipes:[r.u],styles:["button[_ngcontent-%COMP%]{width:-webkit-fill-available;border:1px solid #97144d;padding:10px;margin-top:10px;font-size:18px}.card-header[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff;background-color:#97144d}.card-header[_ngcontent-%COMP%]{padding:.75rem!important;border-top-left-radius:unset;border-top-right-radius:unset}.checkbox-title[_ngcontent-%COMP%]{font-size:16px;color:#212529}input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer}"]}),A),pathMatch:"full"}],F=((R=function e(){_classCallCheck(this,e)}).\u0275mod=c.Nb({type:R}),R.\u0275inj=c.Mb({factory:function(e){return new(e||R)},imports:[[i.e.forChild(S)],i.e]}),R),k=t("PCNd"),B=((M=function e(){_classCallCheck(this,e)}).\u0275mod=c.Nb({type:M}),M.\u0275inj=c.Mb({factory:function(e){return new(e||M)},imports:[[r.c,k.a,F]]}),M)}}]);
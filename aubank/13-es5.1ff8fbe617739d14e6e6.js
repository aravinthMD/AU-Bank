function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{GTwx:function(e,n,t){"use strict";t.r(n),t.d(n,"UserCreationModule",(function(){return k}));var r=t("ofXK"),i=t("tyNb"),s=t("3Pt+"),o=t("y1cd"),c=t("fXoL"),a=t("kmKP"),l=t("SaRM"),u=t("mAmA");function d(e,n){if(1&e&&(c.Wb(0,"option",18),c.Mc(1),c.nc(2,"uppercase"),c.Vb()),2&e){var t=n.$implicit;c.sc("value",t),c.Cb(1),c.Nc(c.oc(2,2,t))}}function b(e,n){1&e&&(c.Wb(0,"label"),c.Mc(1,"ACCESS CONTROLS"),c.Vb())}function f(e,n){if(1&e){var t=c.Xb();c.Wb(0,"label",21),c.Wb(1,"input",22),c.ic("change",(function(e){c.Dc(t);var r=n.$implicit;return c.mc(3).onChange(e,r)})),c.Vb(),c.Wb(2,"span",23),c.Mc(3),c.Vb(),c.Vb()}if(2&e){var r=n.$implicit;c.Cb(1),c.sc("id",r.title),c.Cb(2),c.Nc(r.title)}}function m(e,n){if(1&e&&(c.Wb(0,"div",19),c.Kc(1,f,4,2,"label",20),c.Vb()),2&e){var t=c.mc(2);c.Cb(1),c.sc("ngForOf",t.accessControls)}}function h(e,n){1&e&&c.Rb(0,"span",24)}function p(e,n){if(1&e&&(c.Wb(0,"span"),c.Mc(1),c.Vb()),2&e){var t=c.mc(2);c.Cb(1),c.Nc(t.submitButtonText)}}function C(e,n){if(1&e){var t=c.Xb();c.Wb(0,"div",4),c.Wb(1,"div",5),c.Mc(2," Admin / User Creation "),c.Vb(),c.Wb(3,"div",1),c.Wb(4,"form",6),c.ic("ngSubmit",(function(){return c.Dc(t),c.mc().createUser()})),c.Wb(5,"div",7),c.Wb(6,"label",8),c.Mc(7,"USER ID"),c.Vb(),c.Wb(8,"div",9),c.Rb(9,"input",10),c.Vb(),c.Vb(),c.Wb(10,"div",7),c.Wb(11,"label",11),c.Mc(12,"ROLE"),c.Vb(),c.Wb(13,"select",12),c.ic("change",(function(){return c.Dc(t),c.mc().onRoleChanged()})),c.Kc(14,d,3,4,"option",13),c.Vb(),c.Vb(),c.Kc(15,b,2,0,"label",14),c.Kc(16,m,2,1,"div",15),c.Wb(17,"button",16),c.Kc(18,h,1,0,"span",17),c.Kc(19,p,2,1,"span",14),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var r=c.mc();c.Cb(4),c.sc("formGroup",r.superAdminForm),c.Cb(10),c.sc("ngForOf",r.userRoles),c.Cb(1),c.sc("ngIf","User"===r.superAdminFieldControls.userRole.value),c.Cb(1),c.sc("ngIf","User"===r.superAdminFieldControls.userRole.value),c.Cb(1),c.sc("disabled",r.superAdminForm.invalid||"User"===r.superAdminFieldControls.userRole.value&&0===r.selectedMenuList.length||r.loading),c.Cb(1),c.sc("ngIf",r.loading),c.Cb(1),c.sc("ngIf",!r.loading)}}function v(e,n){if(1&e){var t=c.Xb();c.Wb(0,"label",27),c.Wb(1,"input",28),c.ic("change",(function(e){c.Dc(t);var r=n.$implicit;return c.mc(2).onChange(e,r)})),c.Vb(),c.Wb(2,"span",23),c.Mc(3),c.Vb(),c.Vb()}if(2&e){var r=n.$implicit;c.Cb(1),c.sc("id",r.title),c.Cb(2),c.Nc(r.title)}}function g(e,n){1&e&&c.Rb(0,"span",24)}function M(e,n){if(1&e&&(c.Wb(0,"span"),c.Mc(1),c.Vb()),2&e){var t=c.mc(2);c.Cb(1),c.Nc(t.submitButtonText)}}function V(e,n){if(1&e){var t=c.Xb();c.Wb(0,"div",4),c.Wb(1,"div",5),c.Mc(2," User Creation "),c.Vb(),c.Wb(3,"div",1),c.Wb(4,"form",6),c.ic("ngSubmit",(function(){return c.Dc(t),c.mc().createUser()})),c.Wb(5,"div",7),c.Wb(6,"label",8),c.Mc(7,"USER ID"),c.Vb(),c.Wb(8,"div",9),c.Rb(9,"input",10),c.Vb(),c.Vb(),c.Wb(10,"label"),c.Mc(11,"ACCESS CONTROLS"),c.Vb(),c.Wb(12,"div",25),c.Kc(13,v,4,2,"label",26),c.Vb(),c.Wb(14,"button",16),c.Kc(15,g,1,0,"span",17),c.Kc(16,M,2,1,"span",14),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){var r=c.mc();c.Cb(4),c.sc("formGroup",r.adminForm),c.Cb(9),c.sc("ngForOf",r.accessControls),c.Cb(1),c.sc("disabled",r.adminForm.invalid||0===r.selectedMenuList.length||r.loading),c.Cb(1),c.sc("ngIf",r.loading),c.Cb(1),c.sc("ngIf",!r.loading)}}var A,R,S,x=[{path:"",component:(A=function(){function e(n,t,r,i){_classCallCheck(this,e),this.formBuilder=n,this.userService=t,this.referenceService=r,this.toasterService=i,this.submitButtonText=o.b.SUBMIT_BUTTON_TEXT,this.loading=!1,this.userRoles=Object.values(o.h).filter((function(e){return e!==o.h.SUPER_ADMIN})),this.accessControls=[],this.selectedMenuList=[],this.superAdminForm=this.formBuilder.group({userId:["",[s.t.required]],userRole:[o.h.ADMIN,s.t.required],accessMenus:[""]}),this.adminForm=this.formBuilder.group({userId:["",[s.t.required]],userRole:[o.h.USER],accessMenus:["",s.t.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.currentUserRole=this.userService.currentUserValue.roleName,this.accessControls=this.referenceService.getAvailableAccessControls()}},{key:"onRoleChanged",value:function(){this.superAdminFieldControls.userRole.value===o.h.USER?(this.superAdminFieldControls.accessMenus.setValidators(s.t.required),this.superAdminForm.updateValueAndValidity()):(this.superAdminFieldControls.accessMenus.setValidators(null),this.superAdminForm.updateValueAndValidity()),this.superAdminForm.patchValue({accessMenus:null}),this.selectedMenuList=[]}},{key:"onChange",value:function(e,n){if(e.target.checked)this.selectedMenuList.push(n.value);else{var t=this.selectedMenuList.findIndex((function(e){return e===n.value}));this.selectedMenuList.splice(t,1)}this.validate()}},{key:"validate",value:function(){var e=this.selectedMenuList.find((function(e){return 3===e})),n=this.selectedMenuList.find((function(e){return 4===e})),t=document.getElementById(o.d.MARKETING_MAKER),r=document.getElementById(o.d.MARKETING_CHECKER);e&&!n?r.setAttribute("disabled","true"):n&&!e?t.setAttribute("disabled","true"):(t.removeAttribute("disabled"),r.removeAttribute("disabled"))}},{key:"createUser",value:function(){var e=this;this.loading=!0,this.userService.createUser(this.currentUserRole===o.h.SUPER_ADMIN?this.superAdminFieldControls.userId.value:this.adminFieldControls.userId.value,this.currentUserRole===o.h.SUPER_ADMIN?this.superAdminFieldControls.userRole.value:this.adminFieldControls.userRole.value,Number(this.userService.currentUserValue.userId),this.selectedMenuList).subscribe((function(n){var t=n.ProcessVariables.status,r=n.ProcessVariables.message,i=void 0===r?{}:r;t?(e.toasterService.showSuccess(o.k.CREATE_USER_SUCCESS),e.superAdminForm.reset(),e.adminForm.reset(),e.loading=!1):(e.loading=!1,e.toasterService.showError(i.value))}),(function(n){e.loading=!1,e.toasterService.showError(n)}))}},{key:"superAdminFieldControls",get:function(){return this.superAdminForm.controls}},{key:"adminFieldControls",get:function(){return this.adminForm.controls}}]),e}(),A.\u0275fac=function(e){return new(e||A)(c.Qb(s.c),c.Qb(a.a),c.Qb(l.a),c.Qb(u.a))},A.\u0275cmp=c.Kb({type:A,selectors:[["app-user-creation"]],decls:6,vars:3,consts:[[1,"main"],[1,"p-4"],[1,"container"],["class","user shadow-lg",4,"ngIf"],[1,"user","shadow-lg"],[1,"card-header","text-center"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","userId"],[1,"input-group"],["type","text","formControlName","userId","id","userId","placeholder","Eg: USER0001","autocomplete","off","autofocus","",1,"form-control"],["for","role"],["formControlName","userRole","id","role",1,"custom-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","row d-flex checkbox-container",4,"ngIf"],[1,"shadow",3,"disabled"],["class","spinner-border","style","width: 2rem; height: 2rem;","aria-hidden","true",4,"ngIf"],[3,"value"],[1,"row","d-flex","checkbox-container"],["class","col-6 checkbox-inline",4,"ngFor","ngForOf"],[1,"col-6","checkbox-inline"],["type","checkbox","formControlName","accessMenus",1,"mx-1",3,"id","change"],[1,"checkbox-title"],["aria-hidden","true",1,"spinner-border",2,"width","2rem","height","2rem"],[1,"row","d-flex"],["class","col-6 checkbox-inline container-checkbox",4,"ngFor","ngForOf"],[1,"col-6","checkbox-inline","container-checkbox"],["type","checkbox","formControlName","accessMenus",1,"mx-1","checkbox-input",3,"id","change"]],template:function(e,n){1&e&&(c.Wb(0,"div",0),c.Wb(1,"h2",1),c.Mc(2),c.Vb(),c.Wb(3,"div",2),c.Kc(4,C,20,7,"div",3),c.Kc(5,V,17,5,"div",3),c.Vb(),c.Vb()),2&e&&(c.Cb(2),c.Oc(" ","Super Admin"===n.currentUserRole?"Admin / User Creation":"User Creation"," "),c.Cb(2),c.sc("ngIf","Super Admin"===n.currentUserRole),c.Cb(1),c.sc("ngIf","Admin"===n.currentUserRole))},directives:[r.m,s.v,s.n,s.h,s.b,s.m,s.f,s.s,r.l,s.q,s.u,s.a],pipes:[r.u],styles:["button[_ngcontent-%COMP%]{width:-webkit-fill-available;border:1px solid #5b2e8f;padding:10px;margin-top:10px;font-size:18px}.card-header[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff;background-color:#5b2e8f}.card-header[_ngcontent-%COMP%]{padding:.75rem!important;border-top-left-radius:unset;border-top-right-radius:unset}.checkbox-title[_ngcontent-%COMP%]{font-size:16px;color:#212529}input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer}.card-header.text-center[_ngcontent-%COMP%]{border-radius:6px 7px 0 0}.user[_ngcontent-%COMP%]{border-radius:9px}"]}),A),pathMatch:"full"}],W=((R=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:R}),R.\u0275inj=c.Nb({factory:function(e){return new(e||R)},imports:[[i.e.forChild(x)],i.e]}),R),F=t("PCNd"),k=((S=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:S}),S.\u0275inj=c.Nb({factory:function(e){return new(e||S)},imports:[[r.c,F.a,W]]}),S)}}]);
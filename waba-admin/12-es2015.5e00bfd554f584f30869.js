(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{GTwx:function(e,t,n){"use strict";n.r(t),n.d(t,"UserCreationModule",(function(){return x}));var s=n("ofXK"),r=n("tyNb"),i=n("3Pt+"),o=n("y1cd"),c=n("fXoL"),l=n("kmKP"),u=n("SaRM"),a=n("mAmA");function d(e,t){if(1&e&&(c.Wb(0,"option",18),c.Mc(1),c.nc(2,"uppercase"),c.Vb()),2&e){const e=t.$implicit;c.sc("value",e),c.Cb(1),c.Nc(c.oc(2,2,e))}}function b(e,t){1&e&&(c.Wb(0,"label"),c.Mc(1,"ACCESS CONTROLS"),c.Vb())}function m(e,t){if(1&e){const e=c.Xb();c.Wb(0,"label",21),c.Wb(1,"input",22),c.ic("change",(function(n){c.Dc(e);const s=t.$implicit;return c.mc(3).onChange(n,s)})),c.Vb(),c.Wb(2,"span",23),c.Mc(3),c.Vb(),c.Vb()}if(2&e){const e=t.$implicit;c.Cb(1),c.sc("id",e.title),c.Cb(2),c.Nc(e.title)}}function h(e,t){if(1&e&&(c.Wb(0,"div",19),c.Kc(1,m,4,2,"label",20),c.Vb()),2&e){const e=c.mc(2);c.Cb(1),c.sc("ngForOf",e.accessControls)}}function p(e,t){1&e&&c.Rb(0,"span",24)}function f(e,t){if(1&e&&(c.Wb(0,"span"),c.Mc(1),c.Vb()),2&e){const e=c.mc(2);c.Cb(1),c.Nc(e.submitButtonText)}}function g(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",4),c.Wb(1,"div",5),c.Mc(2," Admin / User Creation "),c.Vb(),c.Wb(3,"div",1),c.Wb(4,"form",6),c.ic("ngSubmit",(function(){return c.Dc(e),c.mc().createUser()})),c.Wb(5,"div",7),c.Wb(6,"label",8),c.Mc(7,"USER ID"),c.Vb(),c.Wb(8,"div",9),c.Rb(9,"input",10),c.Vb(),c.Vb(),c.Wb(10,"div",7),c.Wb(11,"label",11),c.Mc(12,"ROLE"),c.Vb(),c.Wb(13,"select",12),c.ic("change",(function(){return c.Dc(e),c.mc().onRoleChanged()})),c.Kc(14,d,3,4,"option",13),c.Vb(),c.Vb(),c.Kc(15,b,2,0,"label",14),c.Kc(16,h,2,1,"div",15),c.Wb(17,"button",16),c.Kc(18,p,1,0,"span",17),c.Kc(19,f,2,1,"span",14),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=c.mc();c.Cb(4),c.sc("formGroup",e.superAdminForm),c.Cb(10),c.sc("ngForOf",e.userRoles),c.Cb(1),c.sc("ngIf","User"===e.superAdminFieldControls.userRole.value),c.Cb(1),c.sc("ngIf","User"===e.superAdminFieldControls.userRole.value),c.Cb(1),c.sc("disabled",e.superAdminForm.invalid||"User"===e.superAdminFieldControls.userRole.value&&0===e.selectedMenuList.length||e.loading),c.Cb(1),c.sc("ngIf",e.loading),c.Cb(1),c.sc("ngIf",!e.loading)}}function C(e,t){if(1&e){const e=c.Xb();c.Wb(0,"label",27),c.Wb(1,"input",28),c.ic("change",(function(n){c.Dc(e);const s=t.$implicit;return c.mc(2).onChange(n,s)})),c.Vb(),c.Wb(2,"span",23),c.Mc(3),c.Vb(),c.Vb()}if(2&e){const e=t.$implicit;c.Cb(1),c.sc("id",e.title),c.Cb(2),c.Nc(e.title)}}function v(e,t){1&e&&c.Rb(0,"span",24)}function M(e,t){if(1&e&&(c.Wb(0,"span"),c.Mc(1),c.Vb()),2&e){const e=c.mc(2);c.Cb(1),c.Nc(e.submitButtonText)}}function V(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",4),c.Wb(1,"div",5),c.Mc(2," User Creation "),c.Vb(),c.Wb(3,"div",1),c.Wb(4,"form",6),c.ic("ngSubmit",(function(){return c.Dc(e),c.mc().createUser()})),c.Wb(5,"div",7),c.Wb(6,"label",8),c.Mc(7,"USER ID"),c.Vb(),c.Wb(8,"div",9),c.Rb(9,"input",10),c.Vb(),c.Vb(),c.Wb(10,"label"),c.Mc(11,"ACCESS CONTROLS"),c.Vb(),c.Wb(12,"div",25),c.Kc(13,C,4,2,"label",26),c.Vb(),c.Wb(14,"button",16),c.Kc(15,v,1,0,"span",17),c.Kc(16,M,2,1,"span",14),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=c.mc();c.Cb(4),c.sc("formGroup",e.adminForm),c.Cb(9),c.sc("ngForOf",e.accessControls),c.Cb(1),c.sc("disabled",e.adminForm.invalid||0===e.selectedMenuList.length||e.loading),c.Cb(1),c.sc("ngIf",e.loading),c.Cb(1),c.sc("ngIf",!e.loading)}}const A=[{path:"",component:(()=>{class e{constructor(e,t,n,s){this.formBuilder=e,this.userService=t,this.referenceService=n,this.toasterService=s,this.submitButtonText=o.b.SUBMIT_BUTTON_TEXT,this.loading=!1,this.userRoles=Object.values(o.h).filter(e=>e!==o.h.SUPER_ADMIN),this.accessControls=[],this.selectedMenuList=[],this.superAdminForm=this.formBuilder.group({userId:["",[i.t.required]],userRole:[o.h.ADMIN,i.t.required],accessMenus:[""]}),this.adminForm=this.formBuilder.group({userId:["",[i.t.required]],userRole:[o.h.USER],accessMenus:["",i.t.required]})}ngOnInit(){this.currentUserRole=this.userService.currentUserValue.roleName,this.accessControls=this.referenceService.getAvailableAccessControls()}onRoleChanged(){this.superAdminFieldControls.userRole.value===o.h.USER?(this.superAdminFieldControls.accessMenus.setValidators(i.t.required),this.superAdminForm.updateValueAndValidity()):(this.superAdminFieldControls.accessMenus.setValidators(null),this.superAdminForm.updateValueAndValidity()),this.superAdminForm.patchValue({accessMenus:null}),this.selectedMenuList=[]}get superAdminFieldControls(){return this.superAdminForm.controls}get adminFieldControls(){return this.adminForm.controls}onChange(e,t){if(e.target.checked)this.selectedMenuList.push(t.value);else{const e=this.selectedMenuList.findIndex(e=>e===t.value);this.selectedMenuList.splice(e,1)}this.validate()}validate(){const e=this.selectedMenuList.find(e=>3===e),t=this.selectedMenuList.find(e=>4===e),n=document.getElementById(o.d.MARKETING_MAKER),s=document.getElementById(o.d.MARKETING_CHECKER);e&&!t?s.setAttribute("disabled","true"):t&&!e?n.setAttribute("disabled","true"):(n.removeAttribute("disabled"),s.removeAttribute("disabled"))}createUser(){this.loading=!0,this.userService.createUser(this.currentUserRole===o.h.SUPER_ADMIN?this.superAdminFieldControls.userId.value:this.adminFieldControls.userId.value,this.currentUserRole===o.h.SUPER_ADMIN?this.superAdminFieldControls.userRole.value:this.adminFieldControls.userRole.value,Number(this.userService.currentUserValue.userId),this.selectedMenuList).subscribe(e=>{const{ProcessVariables:{status:t},ProcessVariables:{message:n={}}}=e;t?(this.toasterService.showSuccess(o.k.CREATE_USER_SUCCESS),this.superAdminForm.reset(),this.adminForm.reset(),this.loading=!1):(this.loading=!1,this.toasterService.showError(n.value))},e=>{this.loading=!1,this.toasterService.showError(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(i.c),c.Qb(l.a),c.Qb(u.a),c.Qb(a.a))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-user-creation"]],decls:6,vars:3,consts:[[1,"main"],[1,"p-4"],[1,"container"],["class","user shadow-lg",4,"ngIf"],[1,"user","shadow-lg"],[1,"card-header","text-center"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","userId"],[1,"input-group"],["type","text","formControlName","userId","id","userId","placeholder","Eg: USER0001","autocomplete","off","autofocus","",1,"form-control"],["for","role"],["formControlName","userRole","id","role",1,"custom-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","row d-flex checkbox-container",4,"ngIf"],[1,"shadow",3,"disabled"],["class","spinner-border","style","width: 2rem; height: 2rem;","aria-hidden","true",4,"ngIf"],[3,"value"],[1,"row","d-flex","checkbox-container"],["class","col-6 checkbox-inline",4,"ngFor","ngForOf"],[1,"col-6","checkbox-inline"],["type","checkbox","formControlName","accessMenus",1,"mx-1",3,"id","change"],[1,"checkbox-title"],["aria-hidden","true",1,"spinner-border",2,"width","2rem","height","2rem"],[1,"row","d-flex"],["class","col-6 checkbox-inline container-checkbox",4,"ngFor","ngForOf"],[1,"col-6","checkbox-inline","container-checkbox"],["type","checkbox","formControlName","accessMenus",1,"mx-1","checkbox-input",3,"id","change"]],template:function(e,t){1&e&&(c.Wb(0,"div",0),c.Wb(1,"h2",1),c.Mc(2),c.Vb(),c.Wb(3,"div",2),c.Kc(4,g,20,7,"div",3),c.Kc(5,V,17,5,"div",3),c.Vb(),c.Vb()),2&e&&(c.Cb(2),c.Oc(" ","Super Admin"===t.currentUserRole?"Admin / User Creation":"User Creation"," "),c.Cb(2),c.sc("ngIf","Super Admin"===t.currentUserRole),c.Cb(1),c.sc("ngIf","Admin"===t.currentUserRole))},directives:[s.m,i.v,i.n,i.h,i.b,i.m,i.f,i.s,s.l,i.q,i.u,i.a],pipes:[s.u],styles:["button[_ngcontent-%COMP%]{width:-webkit-fill-available;border:1px solid #5b2e8f;padding:10px;margin-top:10px;font-size:18px}.card-header[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff;background-color:#5b2e8f}.card-header[_ngcontent-%COMP%]{padding:.75rem!important;border-top-left-radius:unset;border-top-right-radius:unset}.checkbox-title[_ngcontent-%COMP%]{font-size:16px;color:#212529}input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer}.card-header.text-center[_ngcontent-%COMP%]{border-radius:6px 7px 0 0}.user[_ngcontent-%COMP%]{border-radius:9px}"]}),e})(),pathMatch:"full"}];let R=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[r.e.forChild(A)],r.e]}),e})();var S=n("PCNd");let x=(()=>{class e{}return e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({factory:function(t){return new(t||e)},imports:[[s.c,S.a,R]]}),e})()}}]);
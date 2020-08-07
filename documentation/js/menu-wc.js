'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">axis-bank documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-646670508fb5368ff83340bcb22668d2"' : 'data-target="#xs-components-links-module-AppModule-646670508fb5368ff83340bcb22668d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-646670508fb5368ff83340bcb22668d2"' :
                                            'id="xs-components-links-module-AppModule-646670508fb5368ff83340bcb22668d2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProtectedHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProtectedHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublicHomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManageUsersModule.html" data-type="entity-link">ManageUsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManageUsersModule-1902552b05cae0c9588e958c427417b5"' : 'data-target="#xs-components-links-module-ManageUsersModule-1902552b05cae0c9588e958c427417b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageUsersModule-1902552b05cae0c9588e958c427417b5"' :
                                            'id="xs-components-links-module-ManageUsersModule-1902552b05cae0c9588e958c427417b5"' }>
                                            <li class="link">
                                                <a href="components/DisableUserDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DisableUserDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageUsersRoutingModule.html" data-type="entity-link">ManageUsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MarketingCheckerModule.html" data-type="entity-link">MarketingCheckerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketingCheckerModule-5f0b1738ea09a37f3d96f06b6799fe04"' : 'data-target="#xs-components-links-module-MarketingCheckerModule-5f0b1738ea09a37f3d96f06b6799fe04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketingCheckerModule-5f0b1738ea09a37f3d96f06b6799fe04"' :
                                            'id="xs-components-links-module-MarketingCheckerModule-5f0b1738ea09a37f3d96f06b6799fe04"' }>
                                            <li class="link">
                                                <a href="components/ApproveTemplateDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApproveTemplateDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LaunchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LaunchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LaunchDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LaunchDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketingCheckerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MarketingCheckerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RejectTemplateDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RejectTemplateDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewTemplateHistoryDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewTemplateHistoryDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketingCheckerRoutingModule.html" data-type="entity-link">MarketingCheckerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MarketingMakerModule.html" data-type="entity-link">MarketingMakerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketingMakerModule-a7e0ccee29f7ef9580493b159e78d5df"' : 'data-target="#xs-components-links-module-MarketingMakerModule-a7e0ccee29f7ef9580493b159e78d5df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketingMakerModule-a7e0ccee29f7ef9580493b159e78d5df"' :
                                            'id="xs-components-links-module-MarketingMakerModule-a7e0ccee29f7ef9580493b159e78d5df"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketingMakerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MarketingMakerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageTemplateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreApprovedOffersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreApprovedOffersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PromotionalTemplateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PromotionalTemplateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketingMakerRoutingModule.html" data-type="entity-link">MarketingMakerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-4a12ddd8d5d66e3b6e172fb026bb8509"' : 'data-target="#xs-components-links-module-SharedModule-4a12ddd8d5d66e3b6e172fb026bb8509"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4a12ddd8d5d66e3b6e172fb026bb8509"' :
                                            'id="xs-components-links-module-SharedModule-4a12ddd8d5d66e3b6e172fb026bb8509"' }>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToastComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerticalMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerticalMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserCreationModule.html" data-type="entity-link">UserCreationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserCreationModule-9840385b7453fcfa729e9ea4cc45047b"' : 'data-target="#xs-components-links-module-UserCreationModule-9840385b7453fcfa729e9ea4cc45047b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserCreationModule-9840385b7453fcfa729e9ea4cc45047b"' :
                                            'id="xs-components-links-module-UserCreationModule-9840385b7453fcfa729e9ea4cc45047b"' }>
                                            <li class="link">
                                                <a href="components/UserCreationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserCreationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserCreationRoutingModule.html" data-type="entity-link">UserCreationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WhatsappModule.html" data-type="entity-link">WhatsappModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WhatsappModule-26e3756ad63933dcf47d4e7f457c12e3"' : 'data-target="#xs-components-links-module-WhatsappModule-26e3756ad63933dcf47d4e7f457c12e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WhatsappModule-26e3756ad63933dcf47d4e7f457c12e3"' :
                                            'id="xs-components-links-module-WhatsappModule-26e3756ad63933dcf47d4e7f457c12e3"' }>
                                            <li class="link">
                                                <a href="components/BlockWhatsappDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlockWhatsappDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WhatsappComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WhatsappComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WhatsappRoutingModule.html" data-type="entity-link">WhatsappRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Menu.html" data-type="entity-link">Menu</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link">MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReferenceService.html" data-type="entity-link">ReferenceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToasterService.html" data-type="entity-link">ToasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/Interceptor.html" data-type="entity-link">Interceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticationGuard.html" data-type="entity-link">AuthenticationGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthenticationGuard-1.html" data-type="entity-link">AuthenticationGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EntityResponse.html" data-type="entity-link">EntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginProcessVariables.html" data-type="entity-link">LoginProcessVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginResponse.html" data-type="entity-link">LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestEntity.html" data-type="entity-link">RequestEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenResponse.html" data-type="entity-link">TokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserProcessVariables.html" data-type="entity-link">UserProcessVariables</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link">UserResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
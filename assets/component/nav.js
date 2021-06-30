requirejs.config({
    baseUrl: 'assets/js',
    paths: {handlebars: 'handlebars'}
});

requirejs(['handlebars'], function( hd ) {
    var template = hd.compile(`
    <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="container">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo" href="#home">
                    <img src="#" alt="{{nav}}" />
                </a>
                <a class="navbar-brand brand-logo-mini" href="#home">
                    <img src="" alt="{{nav}}" />
                </a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                            data-bs-toggle="dropdown">
                            <i class="icon-bell mx-0"></i>
                            <span class="count"></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                            aria-labelledby="notificationDropdown">
                            <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-success">
                                        <i class="ti-info-alt mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-normal">Application Error</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted">
                                        Just now
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-warning">
                                        <i class="ti-settings mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-normal">Settings</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                    </p>
                                </div>
                            </a>
                            <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-info">
                                        <i class="ti-user mx-0"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <h6 class="preview-subject font-weight-normal">New user registration</h6>
                                    <p class="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                    </p>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
                            <img src="" alt="profile" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a class="dropdown-item">
                                <i class="ti-settings text-primary"></i>
                                Settings
                            </a>
                            <a class="dropdown-item" href="">
                                <i class="ti-power-off text-primary"></i>
                                Keluar
                            </a>
                        </div>
                    </li>
                </ul>
                
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                    data-toggle="horizontal-menu-toggle">
                    <span class="ti-menu"></span>
                </button>
            </div>
        </div>
    </nav>
    <nav class="bottom-navbar">
        <div class="container">
            <ul class="nav page-navigation">
                <li class="nav-item">
                    <a class="nav-link" href="">
                        <i class="icon-grid menu-icon"></i>
                        <span class="menu-title">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="ti-layers menu-icon"></i>
                        <span class="menu-title">Master</span>
                        <i class="menu-arrow"></i></a>
                    <div class="submenu">
                        <ul class="submenu-item">
                            <li class="nav-item"><a class="nav-link" href="">submenu</a></li>
                            <li class="nav-item"><a class="nav-link" href="">submenu</a></li>
                            <li class="nav-item"><a class="nav-link" href="">submenu</a></li>
                            <li class="nav-item"><a class="nav-link" href="">submenu</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="icon-head menu-icon"></i>
                        <span class="menu-title">Trending</span>
                    </a>
                </li>
                <li class="nav-item mega-menu">
                    <a href="#" class="nav-link">
                        <i class="icon-bar-graph menu-icon"></i>
                        <span class="menu-title">Data</span>
                        <i class="menu-arrow"></i></a>
                    <div class="submenu">
                        <div class="col-group-wrapper row">
                            <div class="col-group col-md-6">
                                <p class="category-heading">Visualisai</p>
                                <div class="submenu-item">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <ul>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-6">
                                            <ul>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-group col-md-3">
                                <p class="category-heading">Asset</p>
                                <ul class="submenu-item">
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                </ul>
                            </div>
                            <div class="col-group col-md-3">
                                <p class="category-heading">Maps</p>
                                <ul class="submenu-item">
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Submenu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    `);
    var context = { nav: "My New Post"};
    $("#entry-template").html(template(context));
});
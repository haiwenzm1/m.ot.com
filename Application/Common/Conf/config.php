<?php
return array(
	/* 模块相关配置 */
    'DEFAULT_MODULE'     => 'Home',
    'MODULE_DENY_LIST'   => array('Common'),
    'MODULE_ALLOW_LIST'  => array('Home'),

    /* 系统数据加密设置 */
    'DATA_AUTH_KEY' => '^pfYzjasWq5?7>!DJEKPM#%-IABH"n,2Rmt.gk}C', //默认数据加密KEY

    /* 调试配置 */
    'SHOW_PAGE_TRACE' => false,

    /* URL配置 */
    'URL_CASE_INSENSITIVE' => true, //默认false 表示URL区分大小写 true则表示不区分大小写
    'URL_MODEL'            => 3, //URL模式
    'VAR_URL_PARAMS'       => '', // PATHINFO URL参数变量
    'URL_PATHINFO_DEPR'    => '/', //PATHINFO URL分割符

    /* 全局过滤配置 */
    'DEFAULT_FILTER' => '', //全局过滤函数

    /* 数据库配置 */
    'DB_TYPE'   => 'mysqli', // 数据库类型
    // 'DB_HOST'   => $_SERVER['SRV_DB_HOST'], // 服务器地址
    // 'DB_NAME'   => $_SERVER['SRV_DB_NAME'], // 数据库名
    // 'DB_USER'   => $_SERVER['SRV_DB_USER'], // 用户名
    // 'DB_PWD'    => $_SERVER['SRV_DB_PASS'],  // 密码
    // 'DB_PORT'   => $_SERVER['SRV_DB_PORT'], // 端口
    'DB_HOST'   => '127.0.0.1', // 服务器地址
    'DB_NAME'   => 'ot_com', // 数据库名
    'DB_USER'   => 'root', // 用户名
    'DB_PWD'    => '123456',  // 密码
    'DB_PORT'   => '3306', // 端口
    'DB_PREFIX' => 'ot_', // 数据库表前缀
);
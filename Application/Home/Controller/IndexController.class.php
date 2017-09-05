<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $this->pageTitle = "系统首页";
        $this->display();
    }

    public function whoWeAre(){    
        $this->pageTitle = "品牌介绍";    
        $this->display('whoWeAre');
    }

    public function howWeWork(){   
        $this->pageTitle = "品牌详情";      
        $this->display('howWeWork');
    }  

    public function whereWeAre(){   
        $this->pageTitle = "品牌来源";      
        $this->display('whereWeAre');
    }  
}
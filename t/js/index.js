$(function(){
				$('#fullpage').fullpage({
					//sectionsColor:['yellowgreen','yellow','blue','gray'],
					//paddingTop:'60px',
					anchors:['page1','page2','page3','page4','page5','page6'],
					menu: '.navbar_list',
					//页面离开后
					onLeave:function(link,index){
						//console.log('afterLoad:anchorLink='+link+';index='+index);
						//move('.section1 h1').set('color','red').scale(1.5).end();
						switch(index){
							case 1:
								move('.top_idea').scale(0.8).end();
								move('.top_idea').set('margin-top','-4%').end();
								move('.pro_intro h2').translate(-350,0).end();
								move('.pro_intro h3').translate(-550,0).end();
								move('.move2 h2').translate(-350,0).end();
								move('.move2 h3').translate(-550,0).end();	
								move('.move3 h2').translate(-350,0).end();
								move('.move3 h3').translate(-550,0).end();
								move('.comp').set('margin-top','80%').end();
								break;
							case 2:
								move('.cont_desc').translate(-800,0).end();
								move('.pro_more').translate(800,0).end();
								move('.m_img1 img').skew(90).end();
								move('.m_img2 img').scale(1.2).end();
								move('.m_img3 img').skew(-90).end();
								break;
							case 3:
								move('.pro_desc3').set('margin-left','-800px').end();
								move('.pro_desc4').set('margin-left','-800px').end();
								break;
							case 4:
								move('.honor_show').scale(1.5).end();
								break;
							case 6:
								move('.tittle6').scale(1.5).end();
								break;									
						}
					},
					//页面载入后
					afterLoad:function(link,index){
						//console.log('afterLoad:anchorLink='+link+';index='+index);
						//move('.section1 h1').set('color','red').scale(1.5).end();
						switch(index){
							case 1:
								move('.top_idea').scale(1.3).end();
								move('.top_idea').set('margin-top','2%').end();
								move('.pro_intro h2').translate(0,0).end();
								move('.pro_intro h3').translate(0,0).end();
								move('.move2 h2').translate(0,0).end();
								move('.move2 h3').translate(0,0).end();	
								move('.move3 h2').translate(0,0).end();
								move('.move3 h3').translate(0,0).end();	
								move('.comp').set('margin-top','3%').end();
								$(".navbar-list li:eq(0)").addClass("active").siblings().removeClass('active');
								break;
							case 2:
								move('.cont_desc').translate(0,0).end();
								move('.pro_more').translate(0,0).end();
								move('.m_img1 img').skew(0).end();
								move('.m_img2 img').scale(1).end();
								move('.m_img3 img').skew(0).end();
								$(".navbar-list li:eq(1)").addClass("active").siblings().removeClass('active');
								break;
							case 3:
								move('.pro_desc3').set('margin-left','250px').end();
								move('.pro_desc4').set('margin-left','50px').end();
								$(".navbar-list li:eq(2)").addClass("active").siblings().removeClass('active');
								break;
							case 4:
								move('.honor_show').scale(1).end();
								$(".navbar-list li:eq(3)").addClass("active").siblings().removeClass('active');
								break;
							case 5:
								$(".navbar-list li:eq(4)").addClass("active").siblings().removeClass('active');
								break;
							case 6:
								$(".navbar-list li:eq(5)").addClass("active").siblings().removeClass('active');
								move('.tittle6').scale(1).end();
								break;								
						}
					},
				});
				//导航栏选中
				$(".navbar-list li").on("mousedown",function(){
				  $(this).addClass("active").siblings().removeClass('active');
				});
				$(window).scroll( function() { 
				    if(window.scrollTop>500){
				        console.log(111);
				    }
				 } );
				//轮播图
				$('#myCarousel').carousel({
					//自动4秒播放
					interval : 4000,
				});
				//荣誉切换
//				$('.honor_list li').each(function(){
//					$(this).mouseenter(function(){
//						$('.honor-count').animate({marginLeft:-975});
//					});
//				});
				$('.honor_list li:eq(0)').mouseenter(function(){
					$('.honor-count').animate({marginLeft:0});
				});
				$('.honor_list li:eq(1)').mouseenter(function(){
					$('.honor-count').animate({marginLeft:-975});
				});
				$('.honor_list li:eq(2)').mouseenter(function(){
					$('.honor-count').animate({marginLeft:-1950});
				});				
			});
//3D翻页
			var curIndex = 1;
			function next(){
				if(curIndex == 6){
					return;
				} 
				$('#p'+curIndex).css('-webkit-transform','rotateY(-360deg)');
				$('#p'+curIndex).animate({'opacity':'0'});
				curIndex++;
				$('#p'+curIndex).css('-webkit-transform','rotateY(0deg)');
				$('#p'+curIndex).animate({'opacity':'1'});
			}
			function pre(){
				if(curIndex==1) {return;}
				$('#p'+curIndex).css('-webkit-transform','rotateY(80deg)');
				$('#page'+curIndex).animate({'opacity':'0'});
				curIndex--;
				$('#p'+curIndex).css('-webkit-transform','rotateY(0deg)');
				$('#p'+curIndex).animate({'opacity':'1'});
			}
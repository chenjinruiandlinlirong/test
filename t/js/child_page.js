window.onload = function()
	{
		var right_jieshao = document.getElementsByClassName('right_jieshao');
		var dibu = document.getElementsByClassName('dibu');
		var div_1 = dibu[0].getElementsByClassName('display_1');
		var li2 = right_jieshao[0].getElementsByTagName("li");
			for(var i = 0 ; i < li2.length ; i++)
			{
				li2[i].index  = i;	
				li2[i].onclick = function()
				{
					for(var j = 0 ; j < li2.length ; j++)
					{
						div_1[j].className ="display_1 hiddened";
						li2[j].className="";
					}	
					div_1[this.index].className = "display_1";
					this.className='big';
				}
			}
	
		var p = document.getElementsByClassName('ct');
		for(var i = 0 ; i < p.length ; i++ )
		{
			check(p[i]);
		}
		function check(str)
		{
			var t = str.innerText.length;
			//alert(t/10);
			var temp = str.innerText;
			var index = 0;
			if(t > 60)
			{
				str.innerText = temp.substring(0,60)+"...";
				str.style.display = 'block';
			}
		}
		var xuanxianglan = document.getElementsByName('xuanxianglan');
	
		var div3 = document.getElementsByClassName('div3');
		var container = document.getElementsByClassName('container');
		var a = container[0].getElementsByTagName('a');

		var li = div3[0].getElementsByTagName('li');
		var container_li = container[0].getElementsByTagName('li');
		
		var h6 = div3[0].getElementsByTagName('h6');
		var div2 = document.getElementsByClassName('div2');
		
		var li1 = div2[0].getElementsByTagName('li');
		change_biaoti_bg(li);
		//change_xuanxiang_bg(container_li);
		
		click_xuanxiang(a);
		function click_xuanxiang(obj)
		{
			for(var i = 0 ; i < obj.length ; i++)
			{
				obj[i].index = i;
				obj[i].onclick = function()
				{
					
					for(var j = 0 ; j < xuanxianglan.length ; j++)
					{
						xuanxianglan[j].style.display = 'none';
					}
					xuanxianglan[this.index-1].style.display = 'block';
				}
			}
		}
		function change_biaoti_bg(str)
		{
			for(var i = 0 ; i < str.length ; i++)
			{
				str[i].index = i;			
				str[i].onmouseover = function()
				{	
					for(var j = 0 ; j < li.length ; j++)
					{
						h6[j].style.background = '#2FD0B5';
						li1[j].className = '';
					}
					li1[this.index].className = 'da';
					h6[this.index].style.background = 'white';
				}
			}
		}
		function change_xuanxiang_bg(str)
		{
			for(var i = 0 ; i < str.length ; i++)
			{
				str[i].index = i;		
				str[i].onclick = function()
				{
					this.style.background = 'black';
					this.style.borderRadius='70%';
				}
			}
		}
		
	}
function showHelp(f){
 var s;
 if(f==0){ help.innerHTML='', help.style.display='none'; return; }
 if(f==1) s='exphelp1';
 if(f==2)
  s='　1、“北/南”钩上，表示表中方位0度为正北，适用于南半球，此时表中左西右东。<br>'
 　+'　2、日食放大图中，红圆为太阳，黄圆为月亮，它们纵向距离是赤纬差，横向则是赤经差,左东右西。(均不含大气折射修正)。<br>'
   +'　3、月食放大图中，深黑圆是地球本影在距离地心R处的截面，R是该时刻地月质心距。淡黑圆是地球半影，定义方式与本影的相似。月食发生时，还会出现一个小灰圆，表示月亮，其大小决定于月亮的地心视半径。图中影子中心与月亮中心的纵向差为它们的赤纬差，横向差为赤经差，左东右西，月东行。不考虑地标对月食的影响。<br>'
   +'　4、“UTC/TD”钩上，表示当前输入的是当地时间，不打钩，表示力学时。<br>'
   +'　5、日食发生时，表中可能会出现一个小三角形，它的顶角表示月影轴与地球的交点，在该位置上此刻发生中心食。软件没用帮助用户计算该处发生全食还是环食，用户可以把该处的地标输入，重新计算即可精确判断。<br>'
   +'　6、“NASA”钩上,使用保守日月边缘,结果与NASA网站提供的数据相同<br>'
   +'　7、本图表中，东经为正，西经为负。';
 if(f==3){
  s='';
 }
 if(f==4){
  s='　1、<b>黄经一、黄纬一：</b>日心当日黄道平分点坐标，含有岁差，不含章动和光行时改正；坐标中心建立在日心，x轴指向当日平春分点，z轴垂直当日黄道面，y轴方向矢等于z叉乘x。<br>'
   +'　2、<b>视赤经、视赤纬：</b>地心当日赤道真分点坐标，含有岁差，含有章动和光行时改正；坐标中心平移到地心(周年运动视差改正,地球公转相关)，x轴指向当日真春分点，z轴垂直当日赤道面，y轴方向矢等于z叉乘x。视黄经、视黄纬也是视坐标，不过坐标轴基面是黄道面而不是赤道面。<br>'
   +'　3、<b>站赤经、站赤纬：</b>站心当日赤道真分点坐标，含有岁差，含有章动和光行时改正；坐标中心平移到观测站(周日运动视差改正,地球自转相关)，x轴指向当日真春分点，z轴垂直当日赤道面，y轴方向矢等于z叉乘x。<br>'
   +'　4、<b>距离：</b>现以伽利略时空观解释它。以太阳系质心(SSB)作为坐标原点，并以遥远的星系作为坐标轴的方向创建的坐标系是一个比较理想的惯性坐标系，当我们把坐标中心平移到地心，并假想某瞬间与SSB保持相对静止或匀速动动，这样的坐标系仍然是惯性系。此类坐标系中，牛顿定律可以直接使用。坐标系中，两物体的“静止距离”就是牛顿定律应用所需的距离。当然，天体在运动，你找不到静止的时刻，所以人们很早就引入了“某一刻、某一瞬间距离”的概念，可理解为“瞬间相对惯性系静止距离”。用光直线构成的视差三角可以直接测量距离，然而光无法瞬时传播，所以得不到所要的瞬间距离，需要进行修正。软件中，<b>日心距、地心距</b>是“瞬间静止距离”，“光行距”指在惯性坐标中（如SSB坐标）“看到”光线离开天体，并在t时刻与地心观测者相遇，此间光行的距离为光行距。设光行时间为T，光速为c，光行距为D，显然，t-T时刻天体的出的光，在t时刻接收，所以软中用t-T时刻天体位置与t时刻观测位置的差值代表光行距D。计算前，T是个估值，不必很精确，得到T后就可算出D。如果认为D不够精确，可用D/c重算T，进而再次算出D，但这已经应用了光速不变原理，更严格精确的计算应采用相对论原理，但已经达到本软件星历的极限精度，没有必要考虑相对论变换。<b>视距离</b>指t-T时刻的地心距，它同样隐藏着相对性原理。<br>'
   +'　5、<b>方位角</b>从正北开始向东测量(顺时针)，即地平经圈起点在正北，正北为0度，正东为90度，正南180度，正西270度；<b>高度角</b>指天体在地平坐标中的纬度，在真高度角大于零时，对高度角进行了大气折射修正。<br>'
   +'　6、星历基于VSOP87(fit to DE200)，进行了截断处理，并适当与DE405拟合修正。<br>'
   +'　7、J2000+-500年精度(d = 10^-6AU ; J2000+-4千年范围内精度低数倍)：<br>'
   +'　　<b>星体  黄经　　 黄纬　距离，　星体  黄经　　 黄纬　距离</b><br>'
   +'　　地球 0.1角秒 0.1角秒 0.1d，　水星 0.2角秒 0.2角秒 0.2d<br>'
   +'　　金星 0.2角秒 0.2角秒 0.2d，　火星 0.5角秒 0.5角秒 1.0d<br>'
   +'　　木星 0.5角秒 0.5角秒 3.0d，　土星 0.5角秒 0.5角秒 5.0d<br>'
   +'　　天王 1.0角秒 1.0角秒 20 d，　海王 1.0角秒 1.0角秒 40d<br>'
   +'　<b>精度比对(2008-Jan-01 00:00 TT 火星)</b><br>'
   +'　JPL　　视赤经 05h 59m 27.4967s 视赤纬+26°56\'27.538 光行距 0.607248116601418 AU<br>'
   +'　本软件 视赤经 05h 59m 27.50s 　视赤纬 26°56\'27.55　光行距 0.60724808 AU<br>'
   +'　　　　　误差　　　　　 0s　　　　　　　　　　　0.012　　　　0.00000003 AU<br>';

 }
 if(f==5){
   s='　升降交点：当日平分点黄纬为零，并显示平分点黄经<br>'
    +'　行星合日指视黄经相合(2008中国天文年历521页),应注意中科院云南天文台给出的是视赤经合日http://www.ynao.ac.cn/sp/forecast';
 }
 if(f==6){
   s='　1、输入表中RA为J2000平赤径,DEC为J2000平赤纬,自行1为赤经年自行(时秒/年),自行2为赤纬年自行(角秒/年)。<br>'
    +'　2、输入表中带*号的行参与计算,不带*号的行不计算。<br>'
    +'　3、周年视差单位是角秒。<br>'
    +'　4、忽略短周期章动指不计算周期小于35天的章动项，以便与中国天文年历比对。<br>'
    +'  5、星座资料包括：汉语、缩写、面积(平方度)、中心赤经 (时分)、中心赤纬(度分)、象限角、族、星座英文名';
 }
 help.style.display='revert';
 help.innerHTML = '<a href="javascript:showHelp(0)">关闭</a><a href="src/readme.htm" style="margin-left:' +
   ' 40px">更多>></a><br>'+s;
}

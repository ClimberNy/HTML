## 发光按钮

> 使用原生css完成特效

> html内部盒子结构：![请添加图片描述](https://img-blog.csdnimg.cn/direct/950a32988ea5407e89b1ebee789633d2.png)

### 制作过程

0.确认思路

1.引入素材

2.定位完成

3.加上before伪类

4.加上hover特效

*5.简化思路

> 4,5可选，也可以直接为block化的a标签加上hover特效，最终效果类似,我会在下方逐一演示



#### 0.确认思路

![请添加图片描述](https://img-blog.csdnimg.cn/direct/45a6d86cf83b4fee88222a8aa541f6b1.png)

使用ul和li来实现这样的一个横向列表，通过为按钮边框以及按钮内部的内容都加上阴影来实现鼠标移动到按钮上产生这样的特效

#### 1.引入素材库

1.类似于css图标的库

> <link href="https://cdn.bootcss.com/font-awesome/5.11.2/css/all.css" rel="stylesheet" />

2.bili图标（svg）

#### 2.定位完成

> 思路：
>
> 通过flex将ul定位到我们需要的位置（我这里定位到了页面中间）（也可以通过传统的position属性来定位到我们想要的位置）
>
> 通过flex将ul内部的li整齐横向排列（也可以使用float达成相同效果，仅限于定位ul时未使用flex，因为父元素弹性定位将导致子元素float失效）

1.定位ul

![请添加图片描述](https://img-blog.csdnimg.cn/direct/91f729652d384cb58678876df3e98ee6.png)

2.定位li

![请添加图片描述](https://img-blog.csdnimg.cn/direct/fe0c29a271054bf38abf0526ca4f4f8b.png)

#### 3.加上before伪类

> 在伪类身上实现边框特效，以及大小变化的动画

![image-20240124105720555](https://img-blog.csdnimg.cn/direct/ab0f119fc18c4298847131bcbc08f5f9.png)

#### 4.加hover特效

1.bili图标（svg图片）

![请添加图片描述](https://img-blog.csdnimg.cn/direct/1bf9839946364458bfbed8cbec3e241c.png)

2.剩余四个图标（类似于字符）

![请添加图片描述](https://img-blog.csdnimg.cn/direct/bb83a94e23f343418e80d7616bd8d116.png)

3.边框放大和蓝色阴影

![请添加图片描述](https://img-blog.csdnimg.cn/direct/fe9bd12e7e70439bb22b2f5266e97274.png)

#### *5.简化思路

> 不再添加before伪类，直接将hover时边框放大和蓝色阴影的效果加在标签的直接父元素上，也就是<a>标签(需要先将a转化为块级元素)

做法：去掉所有before伪类相关的代码，并进行以下修改:(将注释掉的部分加上)

![请添加图片描述](https://img-blog.csdnimg.cn/direct/07496e74de33477392eef5a3653bfb5a.png)

![请添加图片描述](https://img-blog.csdnimg.cn/direct/d7fef2540dd44dbd90fc1b84c552ae1c.png)

> 若在使用本方案的同时不去掉所有before伪类相关的代码，由于伸缩倍数不同，将会产生双层边框的效果：
>
> ![请添加图片描述](https://img-blog.csdnimg.cn/direct/fb167614227b4c93b5515882acdb2324.png)

### 总结与收获

1.绝对定位的父盒子加上相对定位，不然直接作用到body

2.将伪类大小变为原来的0.8倍：transform: scale(0.8); 

3.视窗单位vm，vh

4.伪类之间不能有空格，伪类与元素间必须有空格

![请添加图片描述](https://img-blog.csdnimg.cn/direct/f60feb9dc5a248778d4e1b329fa1330b.png)

![请添加图片描述](https://img-blog.csdnimg.cn/direct/866cb90e651142b2853d3daa56c3aad3.png)

5.![请添加图片描述](https://img-blog.csdnimg.cn/direct/e954157903bc4e53af40f78a617f274c.png)




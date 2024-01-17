# 前端练习-轮播图
> 使用原生js实现，适合初学者练习时进行参考.
## 代码实现思路
### 1.完成静态部分
![请添加图片描述](https://img-blog.csdnimg.cn/direct/9df246c3c68c4835990b3346d8a3e30d.png)
将图片都装在事先写好的盒子，并使用绝对定位使图片相互覆盖，
### 2.实现图片自动轮切
> 由于这里只有三张图，所以在进行部分操作时没有考虑图片较多时的情况，也没有考虑与后端交互时数量未知的情况，这里最好使用length函数来确认图片的数量。

通过调节图片的透明度以实现图片的隐去和显示，加上js回调函数来进行图片轮切周期的设置，（element是通过Class获取到的图片标签）
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/df1c23aad0244973b683e2aa5e3e9746.png)
加上css过渡功能让轮切显得不那么僵硬。
![请添加图片描述](https://img-blog.csdnimg.cn/direct/e6302e9abafe4f4ea9e8d3f14c6fc1ef.png)

### 3.箭头实现图片左右切换
#### 左箭头
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/d262a61e70b94c78bfc2e00d067cceec.png)
>右箭头操作同上

### 4.图片的索引跳转
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/29334a0b84dc4ebb9b5c90eff61c1c21.png)
>另外两个按钮同理

还有另一种方法，使用forEach+事件监听先判断是那个按钮被点击，再执行操作，这样的好处是简化了代码。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/5ced27a246b349c98f3e1e27f664e0a4.png)

## 遇到的问题及解决
将`<script src="dome.js"></script>`放在head，会导致js执行时页面还没渲染完成，js可能找不到对应标签，产生报错，养成将js引入语句放在body底部的好习惯。
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2e3d713e7c6e48f490c8fcaf2ab5b04e.png)
这里的报错便是因为将`<script src="dome.js"></script>`放在head，导致我们设置的onclick所绑定的标签未定义。
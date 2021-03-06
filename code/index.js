// 第一题
/**
 *  最终执行结果是10
 *  var 变量 属于全局作用域
 *  在循环中 a 数组中存储的方法 最终打印的是 全局作用域中的 i 变量,
 *  而 i 变量 随着 循环的执行, 最终结果是 10
 *  所以打印出来的结果也是 10
 * /

// 第二题
/**
 * 最终执行结果是 error
 * 1. var 变量 是全局作用域 变量
 * 2. let 是 块作用域变量, 但是 let 变量不接受 先使用再声明的形式.
 * 3. 在 if 语句块中 tmp 执行的是 let 声明的 tmp 变量, 而console.log方法先于 let 声明执行, 所以会报错
 */

 // 第三题
 var arr = [12, 34, 32, 89, 4];
console.log(Math.min(...arr));

// 第四题
/**
 * 1. var 和 let 都是声明变量
 * 2. var 声明的变量属于全局作用域, let 声明的变量属于块作用域
 * 3. var 变量允许先使用,后声明, let 变量只能先声明再使用
 * 4. const 声明的是一个常量, 与 let 变量相同属于块作用域
 * 5. const 声明的变量需要在声明时赋值, 赋值之后不能改变. let 变量值可以变动
 */

 // 第五题
 /**
  * 最终输出结果 20
  * 箭头函数的this, 指向箭头函数定义时所处的对象，而不是箭头函数使用时所在的对象，默认使用父级的this.
  * 所以该题中的 this 指向 fn 函数声明时所在的obj 对象实例, this.a = 20;
  */

// 第六题
/**
 * Symbol类型是一个全新的类型
 * 标识一个独一无二的值
 * 可以用来处理键值冲突的问题
 * 也可以用来给私有成员命名
 */

 // 第七题
 /**
  * 1. 浅拷贝 是对拷贝对象值的拷贝
  * 2. 如果浅拷贝对象是基本数据类型, 那么会拷贝基本数据类型的值
  * 3. 如果前拷贝对象是引用类型, 那么拷贝的就是引用类型指向的地址, 如果修改B, 就会影响A, 因为A,B都指向同一内存地址
  * 4. 深拷贝 是对引用数据类型的拷贝, 拷贝的不是引用数据对象的地址, 而是会对引用数据对象里的内容进行拷贝, 修改B, 不会影响A, 因为不指向同一地址, 而只是对A的数据进行的镜像复制.
  */

  // 第八题
  /**
   * 1. TypeScript 是 JavaScript 的超类.
   * 2. 相对于 JS  , TS 加强了类型系统, JS 是 弱类型, 动态类型的语言. 而 TS 是强类型, 静态类型语言.
   * 3. TypeScript 执行编译后会生成 JS 文件, 然后通过执行 JS 文件得以运行
   * 4. TS 相对 JS 而言,更加的稳定和安全
   */

   // 第九题
   /**
    * TS 优点:
    * 1. 强类型, 静态类型语言, 对变量类型有着严格的检查, 使得程序更加健壮和安全
    * 2. 可读性强于 JS ,
    * 3. 包容性好, 可以兼容 JS 
    * 
    * TS 缺点:
    * 1. 短期开发成本高于 JS.
    * 2. 增加一定学习成本.
    */

    // 第十题
    /**
     * 工作原理: 设置引用数进行计数, 当对象被引用的时候引用计数+1, 当引用减少时, 引用计数-1, 如果引用计数为0的时候, 触发回收机制, 回收对象.
     * 优点: 
     * 1. 回收及时
     * 2. 因回收暂停的时间减少
     * 缺点: 
     * 1. 对于循环引用的对象不能很好的执行回收
     */

    // 第十一题
    /**
     * 1. 遍历所有对象, 将活动对象一一标记
     * 2. 遍历所有对象, 将活动对象进行整理, 移动对象位置
     * 3. 清除所有没有标记的对象, 回收相应的空间
     */

    // 第十二题
    /**
     * 1. 将新生代内存区域一分为二, 生成两个等量的区域, 标记为 From 和 To
     * 2. 将活动对象存储进 From 区域
     * 3. 对 From 区域内的活动对象进行标记整理
     * 4. 将 From 区域中的对象复制到 To 区域
     * 5. 释放 From 区域的空间
     * 6. 将 To 区域标记为 From, From 区域标记为 To 完成区域对调, 完成回收
     */

     // 第十三题
     /**
      * 增量标记算法应该在数据量大, 不能占用程序执行时间的时候使用. 在程序执行的空隙时间, 多次,小批量的进行内存回收
      * 工作原理: 
      * 1. 正常的标记活动对象
      * 2. 整理清除的时候选择将数据分组, 在程序执行的间隙, 小批量的进行整理清除, 尽量的减少程序暂停的最大时间.
      */
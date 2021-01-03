#### Chap 7: Boltzmann statistics

##### Sec 7.1: Statistical expression of thermodynamic variables

我们的任务是求出宏观热力学量，例如内能 $U$，广义力 $Y$，熵 $S$。

首先考虑量子统计下的Boltzmann system。为了使得表达简明，定义**配分函数(partition function)**为
$$
Z(\beta, y)=\sum_i\omega_ie^{-\alpha-\beta\varepsilon_i}.
$$
其中 $y$ 是对应着广义力的外参量改变量。此后，我们希望在表达式中不出现微观量 $\omega_i,\varepsilon_i$，而仅出现配分函数 $Z$。

* 内能的表达式。
  $$
  \begin{split}U&=\sum_i\varepsilon_ia_i=\sum_i\varepsilon_i\omega_ie^{-\alpha-\beta\varepsilon_i}
  \\&=\frac{N}{Z}\sum_i\varepsilon_i\omega_ie^{-\beta\varepsilon_i}\\
  &=-N\frac{\part\ln Z}{\part\beta}.
  \end{split}
  $$

* 广义力的表达式。（这里假设了 $\part\omega_i/\part y=0,\part\beta/\part y=0$）
	
	* Question: 那么circular chain rule如何解释？

$$
\begin{split}
Y&=\sum_i\frac{\part\varepsilon_i}{\part y}a_i=\sum_i\omega_ie^{-\alpha-\beta\varepsilon_i}\frac{\part\varepsilon_i}{\part y}\\
&=-\frac{N}{\beta}\frac{\part \ln Z}{\part y}.
\end{split}
$$

* 熵的表达式。首先由热一定律得出
  $$
  dQ=dU-Ydy=-Nd\left(\frac{\part\ln Z}{\part\beta}\right)+\frac{N}{\beta}\frac{\part\ln Z}{\part y}dy.
  $$
  应用 $Z$ 的全微分，得
  $$
  \begin{split}
  dQ&=-Nd\left(\frac{\part\ln Z}{\part\beta}\right)+\frac{N}{\beta}\left(d\ln Z-\frac{\part\ln Z}{\part \beta}d\beta\right)\\
  \beta dQ&=-Nd\left(\beta\frac{\part\ln Z}{\part \beta}\right)+Nd\ln Z\\
  &=Nd\left(\ln Z-\beta\frac{\part\ln Z}{\part\beta}\right).
  \end{split}
  $$
  所以 $\beta$ 是 $dQ$ 的integrating factor。据热二定律，$1/T$ 也是integrating factor。所以我们有
  $$
  \beta=\frac{1}{kT}.
  $$
  然后积分变得容易。选取积分常数为0(why?)，有
  $$
  S=Nk\left(\ln Z-\beta\frac{\part\ln Z}{\part\beta}\right).
  $$
  稍作代换，得到**Boltzmann关系**
  $$
  S=k\ln\varOmega.
  $$

讨论Bose和Fermi system的经典极限。它们的分布和Boltzmann一样，所以配分函数一样，所以内能和广义力表达式也一样。但是，选定不同的积分常数(why?)，熵的表达式变成了
$$
S=Nk\left(\ln Z-\beta\frac{\part\ln Z}{\part\beta}\right)-k\ln N!=k\ln\frac{\varOmega_\text B}{N!}.
$$
讨论经典统计下的Boltzmann system。配分函数是
$$
Z=\sum_ie^{-\beta\varepsilon_i}\frac{\Delta\omega_i}{h_0^r}=\int...\int e^{-\beta\varepsilon(p,q)}\frac{dq_1dq_2...dq_rdp_1dp_2...dp_r}{h_0^r}.
$$

***

##### Sec 7.2-3: Equation of state for ideal gas; Maxwell velocity distribution

**物态方程的推导**。理想气体适用于经典统计下的Boltzmann system。注意到
$$
\varepsilon=\frac{p_x^2+p_y^2+p_z^2}{2m},
$$
轻松得出配分函数
$$
\begin{split}
Z&=\iiint\iiint e^{-\beta(p_x^2+p_y^2+p_z^2)/2m}\frac{dq_xdq_ydq_zdp_xdp_ydp_z}{h^3}\\
&=\frac{1}{h^3}\iiint_V dq_xdq_ydq_z\left(\int_{-\infty}^{+\infty} e^{-\beta p_x^2/2m}dp_x\right)^3\\
&=\frac{V}{h^3}\left(\frac{2\pi m}{\beta}\right)^{3/2}.
\end{split}
$$
套用上节公式，轻松得出广义力（压强）
$$
p=\frac{NkT}{V}.
$$

此即物态方程。

**Maxwell velocity distribution的推导**。动量在 $p_x,p_y,p_z$ 附近的粒子总数为
$$
\begin{split}
\Delta N&=\sum_{p_x,p_y,p_z} a_i=\iiint dxdydz\cdot e^{-\alpha-\beta(p_x^2+p_y^2+p_z^2)/2m}\frac{dp_xdp_ydp_z}{h^3}\\
&=\frac{V}{h^3}e^{-\alpha-(p_x^2+p_y^2+p_z^2)/2mkT}dp_xdp_ydp_z,
\end{split}
$$
且满足regularization
$$
\iiint\frac{V}{h^3}e^{-\alpha-(p_x^2+p_y^2+p_z^2)/2mkT}dp_xdp_ydp_z=N.
$$
据此算出 $e^{-\alpha}$ （其实没必要，跟**配分函数**算出来的一样），代回得
$$
\frac{\Delta N}{N}=\frac{1}{(2\pi mkT)^{3/2}}e^{-\frac{p_x^2+p_y^2+p_z^2}{2mkT}}dp_xdp_ydp_z.
$$
等价地，把动量换成速度之后得到
$$
\frac{\Delta N}{N}=\left(\frac{m}{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}dv_xdv_ydv_z.
$$
换球坐标再积分，得到速度的PDF
$$
f_V(v)dv=4\pi\left(\frac{m}{2\pi kT}\right)^{3/2}e^{-\frac{mv^2}{2kT}}v^2dv.
$$

***

##### Sec 7.4-5: Equipartition theorem; Internal energy and heat capacity of ideal gas

equipartition theorem: 对于处在温度为 $T$ 的平衡状态的**经典**系统，粒子能量中每一个平方项的平均值为 $kT/2$。

对于动能项 $\varepsilon_p$，它一般表示为
$$
\varepsilon_p=\frac{1}{2}\sum_{i=1}^ra_ip_i^2.
$$
其中 $a_i$ 可能与 $q_j$ 有关，与 $p_j$ 无关。我们以 $i=1$ 的动能项为例，
$$
\begin{split}
\overline{\frac{1}{2}a_1p_1^2}&=\frac{1}{N}\int \frac{1}{2}a_1p_1^2e^{-\alpha-\beta\varepsilon}\frac{dq_1...dq_rdp_1...dp_r}{h^r_0}\\
&=\frac{1}{Z}\int\frac{1}{2}a_1p_1^2e^{-\beta\varepsilon}\frac{dq_1...dq_rdp_1...dp_r}{h^r_0}\\
&=\frac{1}{Z}\int_{-\infty}^{+\infty}\frac{1}{2}a_1p_1^2e^{-\beta\frac{1}{2}a_1p_1^2}dp_1\int e^{-\beta\varepsilon_\text{res}}\frac{dq_1...dq_rdp_2...dp_r}{h_0^r}.
\end{split}
$$
其中 $\varepsilon_\text{res}=\varepsilon-\frac{1}{2}a_1p_1^2$。据integration by parts, 第一项积分变成
$$
\int_{-\infty}^{+\infty}\frac{1}{2}a_1p_1^2e^{-\beta\frac{1}{2}a_1p_1^2}dp_1=\frac{1}{2\beta}\int_{-\infty}^{+\infty}e^{-\beta\frac{1}{2}a_1p_1^2}dp_1.
$$
代回，就有
$$
\overline{\frac{1}{2}a_1p_1^2}=\frac{1}{Z}\frac{1}{2\beta}\int e^{-\beta\varepsilon}\frac{dq_1...dq_rdp_1...dp_r}{h^r_0}=\frac{1}{2}kT.
$$
对于势能项，一般表示为
$$
\varepsilon_q=\frac{1}{2}\sum_{i=1}^rb_iq_i^2.
$$
我们可以对称地导出势能项的equipartition。


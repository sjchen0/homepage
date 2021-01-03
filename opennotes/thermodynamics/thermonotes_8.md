#### Chap 8: Bose statistics and Fermi statistics

##### Sec 8.1: Statistical expression of thermodynamic variables

本章思路和之前略有不同。Chapter 6&7以 $N,U,y$ 为已知参量；我们现在考虑开系（系统能与源交换粒子和热量），把**最概然**分布替换成**平均**分布（开系粒子数不守恒），以 $\alpha,\beta,y$ 为已知参量。$\overline N,U$ 可以表示为
$$
\overline N=\sum_i\frac{\omega_i}{e^{\alpha+\beta\varepsilon_i}\pm 1},U=\sum_i\frac{\omega_i\varepsilon_i}{e^{\alpha+\beta\varepsilon_i}\pm 1}.
$$
首先考虑Bose system。定义**巨配分函数(grand canonical partition function)**
$$
\varXi(\alpha,\beta,y)=\prod_i\left(1-e^{-\alpha-\beta\varepsilon_i}\right)^{-\omega_i}.
$$
根据
$$
\ln\varXi=-\sum_i\omega_i\ln\left(1-e^{-\alpha-\beta\varepsilon_i}\right),
$$
我们有
$$
\overline N=-\frac{\part\ln\varXi}{\part\alpha},U=-\frac{\part\ln\varXi}{\part\beta},Y=-\frac{1}{\beta}\frac{\part\ln\varXi}{\part y}.
$$
可以验证
$$
\beta\left(dU-Ydy+\frac{\alpha}{\beta}d\overline N\right)=d\psi.
$$
而
$$
\frac{1}{T}(dU-Ydy+\mu d\overline N)=dS,
$$
说明
$$
\beta=\frac{1}{kT},\alpha=-\frac{\mu}{kT}.
$$
所以
$$
S=k\left(\ln\varXi-\alpha\frac{\part\ln\varXi}{\part\alpha}-\beta\frac{\part\ln\varXi}{\part\beta}\right)=k\ln\varOmega.
$$
对于Fermi system，各热力学量表达式一样。
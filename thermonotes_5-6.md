#### Chap 5: Intro to irreversible thermodynamics

局域熵密度的增加率可以写成
$$
\frac{\part s}{\part t}=-\nabla\cdot J_s+\varTheta.
$$
其中第一项是熵流密度，第二项是局域熵产生率(rate of entropy production)。一般地，我们有
$$
\varTheta=\sum_k \mathbf J_k\cdot \mathbf X_k.
$$
其中流量(flux) $J_k$ 是关于所有动力(force) $X_j$ 的函数。定义一个系统是linear，当
$$
J_k=\sum_jL_{kj}X_j.
$$
其中，系数 $L_{kj}$ 称为linear response coefficients；反之则是nonlinear。据热二定律，当linear时，$\varTheta$ 是正定二次型。

**even system**: 所有的linear response coefficients构成的矩阵对称且正定的system。

**Minimum Entropy Production Principle(MINEP)**：当一个even system被time-independently constrained thermodynamic forces驱动，且靠近一个linear irreversible steady state，即各个热力学量不随时间变化的状态时，其熵产生率
$$
\varTheta=X^TLX
$$
取最小值。显然，这时总的熵产生率
$$
P=\int\varTheta d\tau
$$
也取最小值。

***

* 重要公式 $\nabla\cdot(\vec f\cdot\vec g)=\vec f\cdot(\nabla\cdot\vec g)+\vec g\cdot(\nabla\cdot\vec f)$。若其中一个是标量，则仍然会退化成类似的形式。
* integrating factor: 若 $dz=X(x,y)dx+Y(x,y)dy$ 不是全微分，但 $\lambda(x,y)X(x,y)dx+\lambda(x,y)Y(x,y)dy$ 构成全微分 $ds$，则称 $\lambda(x,y)$ 是integrating factor。一个**重要性质**：若 $\lambda$ 是integrating factor，则 $\lambda\psi(s)$ 也是 integrating factor，对于任意的函数 $\psi(\cdot)$。

***

#### Chap 6: Most probable distribution of near-independent particles

**near-independent**：粒子间相互作用足够弱，使得系统能量可以表为
$$
E=\sum_{i=1}^N\varepsilon_i.
$$
其中，$\varepsilon_i$ 与其它粒子的坐标和动量无关。

描述系统的**微观运动**：假设有 $N$ 个粒子，第 $i$ 个粒子可由 $2r$ 个坐标+动量来描述。在 $\mu$ 空间上，它们构成 $N$ 个点。

* 经典统计
* 量子统计：uncertainty principle导出的相格(phase space cell)概念 $h^r$。
	* Boltzmann system: 粒子可以分辨，每个个体量子态无容纳限制。
	* Bose-Einstein system: 粒子不可分辨，每个个体量子态无容纳限制。
	* Fermi-Dirac system: 粒子不可分辨，每个个体量子态最多容纳一个。

描述粒子的**能级分布**：考虑一个能级(energy level) $\varepsilon_i$，其简并度(degeneracy)为 $\omega_i$。$N$ 个粒子在能级上的分布可以表示为数列 $\{a_i\}$。显然，必有 $\sum a_i=N$ 和 $\sum a_i\varepsilon_i=E$。

描述粒子的**微观状态数**：因为简并度和distinguishability等因素的存在，微观状态数和能级分布并不等同。假设按能级的分布 $\{a_i\}$ 已经给定，那么，

* 对于Boltzmann system: 先将 $N$ 个粒子partition之后，再依简并度分配量子态。显然，微观状态数是
  $$
  \varOmega_\text{B}=\frac{N!}{\prod_ia_i!}\cdot\prod_i\omega_i^{a_i}.
  $$

* 对于Bose system: 按能级分配只有一种情况，因为粒子不可分辨。只需考虑向各能级内量子态的分配(非负整数解问题)。显然，微观状态数是
  $$
  \varOmega_\text{B.E.}=\prod_i\frac{(a_i+\omega_i-1)!}{a_i!(\omega_i-1)!}.
  $$

* 对于Fermi system: 也只需考虑向各能级内量子态的分配。显然，微观状态数是
  $$
  \varOmega_\text{F.D.}=\prod_i\frac{\omega_i!}{a_i!(\omega_i-a_i)!}.
  $$

	* 若满足**经典极限条件**$a_i\ll\omega_i$，则Bose和Fermi system都近似为
$$
\varOmega\approx\prod_i\frac{\omega_i^{a_i}}{a_i!}=\frac{\varOmega_\text{B}}{N!}.
$$

* 经典统计下的分布与微观状态数：虽然能量分布连续，可以通过划分的方法使之可数。将 $\mu$ 空间划分成许多体积元 $\Delta\omega_i$，对应不同的能级。设相格的体积为 $h_0^r$，则简并度为 $\Delta\omega_i/h_0^r$。按Boltzmann system的结果，

$$
\varOmega_\text{Classic}=\frac{N!}{\prod_ia_i!}\prod_i\left(\frac{\Delta\omega_i}{h_0^r}\right)^{a_i}.
$$

**most probable distribution**: 根据principle of equal a priori probabilities，对于平衡状态中的孤立系统，每一个微观状态出现的概率相等。因此，微观状态数最多的分布出现的概率最大，称为most probable distribution。为了求出MPD，考虑使 $\ln\varOmega$ 取极值的 $\{a_i\}$。这些 $a_i$ 并不是独立的，它们满足两个约束条件：
$$
\sum_ia_i=N; \sum_i\varepsilon_i a_i=E.
$$
用Lagrange multipliers即可导出分布：

* Boltzmann: 
  $$
  a_i=\omega_i^{-\alpha-\beta\varepsilon_i}.
  $$

* Bose-Einstein: 
  $$
  \alpha_i=\frac{\omega_i}{e^{\alpha+\beta\varepsilon_i}-1}.
  $$

* Fermi-Dirac: 
  $$
  \alpha_i=\alpha_i=\frac{\omega_i}{e^{\alpha+\beta\varepsilon_i}+1}.
  $$
  

***

* method of Lagrange multipliers: 对 $n$ 元函数 $f(x_1,...,x_n)$，假设自变量之间有 $k$ 个约束 $g_1(x_1,...,x_n)=0,...,g_k(x_1,...,x_n)=0$。则 $f$ 在约束下的极值是所谓Lagrange函数 ($\mathbb{R}^n\to\mathbb{R}$)

$$
\mathcal{L}(x_1,...,x_n;\lambda_1,...,\lambda_k)=f(x_1,...,x_n)+\sum_{i=1}^k\lambda_i g_i(x_1,...,x_n)
$$
​		在无约束下的极值。

​		例如，在Boltzmann分布的推导中，考虑 $\mathcal{L}=\ln\varOmega-\alpha N-\beta E$ 的极值。对 $a_i$ 求偏导，它显然要求
$$
\ln\left(\frac{a_i}{\omega_i}\right)+\alpha+\beta\varepsilon_i=0\Rightarrow a_i=\omega_i^{-\alpha-\beta\varepsilon_i}.
$$
​		对 $\alpha$ 和 $\beta$ 求偏导，即是约束条件 $N$ 和 $E$。

* 互为热平衡的两个子系统具有相同的 $\beta$。

  设两个子系统分别有 $N$ 和 $N'$ 个粒子，总能量为 $E$（3个约束条件），它们有各自的能级和简并度。注意到系统总的微观状态数是 $\varOmega\cdot\varOmega'$，对应的Lagrange函数是 $\ln\varOmega+\ln\varOmega'-\alpha N-\alpha' N-\beta E$，易见它们有共同的 $\beta$。

***

#### Chap 7: Boltzmann statistics

我们的任务是求出宏观热力学量，例如内能 $U$，广义力 $Y$，熵 $S$。为了使得表达简明，定义**配分函数**为
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
  然后，易得
  $$
  S=Nk\left(\ln Z-\beta\frac{\part\ln Z}{\part\beta}\right).
  $$
  稍作代换，得到**Boltzmann关系**
  $$
  S=k\ln\varOmega.
  $$
  
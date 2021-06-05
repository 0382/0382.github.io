var documenterSearchIndex = {"docs":
[{"location":"formula/#Formula","page":"Formula","title":"Formula","text":"","category":"section"},{"location":"formula/#CG-coefficient","page":"Formula","title":"CG coefficient","text":"","category":"section"},{"location":"formula/","page":"Formula","title":"Formula","text":"Ref [1], P240, Section 8.2.4, Formula (20).","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"C_j_1m_1j_2m_2^j_3m_3 = delta_m_3 m_1+m_2leftdfracbeginpmatrix2j_1  J-2j_3endpmatrixbeginpmatrix2j_2J-2j_3endpmatrixbeginpmatrixJ+1J-2j_3endpmatrixbeginpmatrix2j_1j_1-m_1endpmatrixbeginpmatrix2j_2  j_2 - m_2endpmatrixbeginpmatrix2j_3  j_3-m_3endpmatrixright^12 sum_z (-1)^zbeginpmatrixJ-2j_3  zendpmatrixbeginpmatrixJ-2j_2  j_1-m_1-zendpmatrixbeginpmatrixJ-2j_1  j_2 + m_2 - zendpmatrix","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"where, J = j_1+j_2+j_3. It is already combination of binominals.","category":"page"},{"location":"formula/#j-symbol","page":"Formula","title":"3j symbol","text":"","category":"section"},{"location":"formula/","page":"Formula","title":"Formula","text":"Ref [1], P236, Section 8.1.2, Formula (11).","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"beginpmatrixj_1  j_2  j_3  m_1  m_2  m_3endpmatrix = (-1)^j_3+m_3+2j_1dfrac1sqrt2j_3+1C_j_1-m_1j_2-m_2^j_3m_3","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"In my code, I use CG coefficient to calculate 3j symbol.","category":"page"},{"location":"formula/#j-symbol-2","page":"Formula","title":"6j symbol","text":"","category":"section"},{"location":"formula/","page":"Formula","title":"Formula","text":"Ref [1], P293, Section 9.2.1, Formula (1).","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"beginBmatrixj_1  j_2  j_3  j_4  j_5  j_6endBmatrix = Delta(j_1j_2j_3)Delta(j_4j_5j_3)Delta(j_1j_5j_6)Delta(j_4j_2j_6) \ntimes sumlimits_ndfrac(-1)^n(n+1)(n-j_1j_2j_3)(n-j_4j_5j_3)(n-j_1j_5j_6)(n-j_4j_2j_6)(j_1j_2j_4j_5-n)(j_1j_3j_4j_6-n)(j_2j_3j_5j_6-n)","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Here, I use j_1j_2j_3 to represent j_1+j_2+j_2. The symbol Delta(abc) is defined as","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Delta(abc) = leftdfrac(a+b-c)(a-b+c)(-a+b+c)(a+b+c+1)right^frac12","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"We can find that","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"beginpmatrixj_1+j_2-j_3  n - j_4j_5j_3endpmatrix = dfrac(j_1+j_2-j_3)(n-j_4j_5j_3)(j_1j_2j_4j_5-n) \nbeginpmatrixj_1-j_2+j_3  n - j_4j_2j_6endpmatrix = dfrac(j_1-j_2+j_3)(n-j_4j_2j_6)(j_1j_3j_4j_6-n) \nbeginpmatrixj_2+j_3-j_1  n - j_1j_5j_6endpmatrix = dfrac(j_2+j_3-j_1)(n-j_1j_5j_6)(j_2j_3j_5j_6-n) \nbeginpmatrixn+1  j_1j_2j_3+1endpmatrix = dfrac(n+1)(n-j_1j_2j_3)(j_1j_2j_3+1)","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"So, we have","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"beginBmatrixj_1  j_2  j_3  j_4  j_5  j_6endBmatrix = dfracDelta(j_4j_5j_3)Delta(j_1j_5j_6)Delta(j_4j_2j_6)Delta(j_1j_2j_3) \ntimes sumlimits_n (-1)^n beginpmatrixn+1  j_1j_2j_3+1endpmatrix beginpmatrixj_1+j_2-j_3  n - j_4j_5j_3endpmatrix beginpmatrixj_1-j_2+j_3  n - j_4j_2j_6endpmatrix beginpmatrixj_2+j_3-j_1  n - j_1j_5j_6endpmatrix","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Rewrite Delta(abc) with binominals,","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Delta(abc) = leftdfrac1beginpmatrixa+b+c+1  2a + 1endpmatrix beginpmatrix2a  a + b - cendpmatrix(2a+1)right^frac12","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"So","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"dfracDelta(j_4j_5j_3)Delta(j_1j_5j_6)Delta(j_4j_2j_6)Delta(j_1j_2j_3) \n= dfrac12j_4+1 leftdfracbeginpmatrixj_1j_2j_3+1  2j_1+1endpmatrixbeginpmatrix2j_1  j_1 + j_2 - j_3endpmatrixbeginpmatrixj_1j_5j_6+1  2j_1+1endpmatrixbeginpmatrix2j_1  j_1+j_5-j_6endpmatrixbeginpmatrixj_4j_5j_3+12j_4+1endpmatrixbeginpmatrix2j_4j_4+j_5-j_3endpmatrixbeginpmatrixj_4j_2j_6+1  2j_4+1endpmatrixbeginpmatrix2j_4  j_4+j_2-j_6endpmatrixright^frac12","category":"page"},{"location":"formula/#j-symbol-3","page":"Formula","title":"9j symbol","text":"","category":"section"},{"location":"formula/","page":"Formula","title":"Formula","text":"Ref [1], P340, Section 10.2.4, Formula (20)","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"beginBmatrixj_1  j_2  j_3  j_4  j_5  j_6  j_7  j_8  j_9endBmatrix = sumlimits_t(-1)^2t(2t+1)beginBmatrixj_1  j_2  j_3  j_6  j_9  tendBmatrix beginBmatrixj_4  j_5  j_6  j_2  t  j_8endBmatrix beginBmatrixj_7  j_8  j_9  t  j_1  j_4endBmatrix","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Use 6j symbol result above, we get","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"dfracDelta(j_1j_9t)Delta(j_6j_9j_3)Delta(j_6j_2t)Delta(j_1j_2j_3) dfracDelta(j_4tj_8)Delta(j_2tj_6)Delta(j_2j_5j_8)Delta(j_4j_5j_6) dfracDelta(j_7j_1j_4)Delta(tj_1j_9)Delta(tj_8j_4)Delta(j_7j_8j_9) \n = dfracDelta(j_3j_6j_9)Delta(j_2j_5j_8)Delta(j_1j_4j_7)Delta(j_1j_2j_3)Delta(j_4j_5j_6)Delta(j_7j_8j_9) Delta^2(j_1j_9t)Delta^2(j_2j_6t)Delta^2(j_4j_8t)","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Define j_123 equiv j_1+j_2+j_3, and","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"P_0 equiv dfracDelta(j_3j_6j_9)Delta(j_2j_5j_8)Delta(j_1j_4j_7)Delta(j_1j_2j_3)Delta(j_4j_5j_6)Delta(j_7j_8j_9) \n= leftdfracbeginpmatrixj_123 + 1  2j_1+1endpmatrixbeginpmatrix2j_1j_1+j_2-j_3endpmatrixbeginpmatrixj_456+12j_5+1endpmatrixbeginpmatrix2j_5  j_4+j_5-j_6endpmatrixbeginpmatrixj_789+1  2j_9+1endpmatrixbeginpmatrix2j_9  j_7 + j_9 - j_8endpmatrixbeginpmatrixj_147 + 1 2j_1 + 1endpmatrixbeginpmatrix2j_1  j_1+j_4-j_7endpmatrixbeginpmatrixj_258+1  2j_5+1endpmatrixbeginpmatrix2j_5  j_2+j_5 - j_8endpmatrixbeginpmatrixj_369+1  2j_9+1endpmatrixbeginpmatrix2j_9  j_3+j_9 - j_6endpmatrixright^12","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Define","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"P(t) equiv (-1)^2t(2t+1)Delta^2(j_1j_9t)Delta^2(j_2j_6t)Delta^2(j_4j_8t)  \n = (-1)^2t dfrac1beginpmatrixj_1+j_9+t+1  2t+1endpmatrixbeginpmatrix2t  j_1+t-j_9endpmatrixbeginpmatrixj_2+j_6+t+1  2t+1endpmatrixbeginpmatrix2t  j_2+t-j_6endpmatrixbeginpmatrixj_4+j_8+t  2t+1endpmatrixbeginpmatrix2t  j_4+t-j_8endpmatrix(2t+1)^2","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"A(tx) equiv (-1)^xbeginpmatrixx+1  j_123 + 1endpmatrixbeginpmatrixj_1+j_2-j_3  x - (j_6+j_9+j_3)endpmatrix beginpmatrixj_1+j_3-j_2  x - (j_6+j_2+t)endpmatrixbeginpmatrixj_2+j_3-j_1  x - (j_1 + j_9 + t)endpmatrix","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"B(ty) equiv (-1)^ybeginpmatrixy+1  j_456 + 1endpmatrixbeginpmatrixj_4+j_5-j_6  y - (j_2+t+j_6)endpmatrixbeginpmatrixj_4+j_6-j_5  y - (j_2+j_5+j_8)endpmatrixbeginpmatrixj_5+j_6-j_4  y - (j_4+t+j_8)endpmatrix","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"C(tz) equiv (-1)^z beginpmatrixz+1  j_789 + 1endpmatrixbeginpmatrixj_7+j_8-j_9  z - (t+j_1+j_9)endpmatrixbeginpmatrixj_7+j_9-j_8  z - (t+j_8+j_4)endpmatrixbeginpmatrixj_8+j_9- j_7  z - (j_7 + j_1 + j_4)endpmatrix","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"At last, we get","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"beginBmatrixj_1  j_2  j_3  j_4  j_5  j_6  j_7  j_8  j_9endBmatrix = P_0sum_t P(t) left(sum_x A(tx)right) left(sum_y B(ty)right) left(sum_z C(tz)right)","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"It deserves to be mentioned that, although the formula has 4 sum, the sum of xyz are decoupled. So we can do the three for loops respectively, which means the depth of for loop is not 4 but 2.","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"Reference","category":"page"},{"location":"formula/","page":"Formula","title":"Formula","text":"[1]: A. N. Moskalev D. A. Varshalovich and V. K. Khersonskii, Quantum theory of angular momentum.","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"HalfInt\nSqrtRational","category":"page"},{"location":"api/#CGcoefficient.HalfInt","page":"API","title":"CGcoefficient.HalfInt","text":"HalfInt = Union{Integer, Rational}\n\nAngular momentum quantum numbers may be half integers and integers. With HalfInt type, you can use both 2 and 3//2 as parameters. But the parameter like 5//3, who's denominator is not 2 while gives out error.\n\n\n\n\n\n","category":"type"},{"location":"api/#CGcoefficient.SqrtRational","page":"API","title":"CGcoefficient.SqrtRational","text":"SqrtRational <: Real\n\nA type to store exact value of square root of a Rational: ±√p. To store infinity values, use Rational{BigInt} to represent the p. Basic functions such as zero, one, inv, *, / are supported for this type.\n\n\n\n\n\n","category":"type"},{"location":"api/#Core-functions","page":"API","title":"Core functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"CG\nthreeJ\nsixJ\nnineJ","category":"page"},{"location":"api/#CGcoefficient.CG","page":"API","title":"CGcoefficient.CG","text":"CG(j1::HalfInt, j2::HalfInt, j3::HalfInt, m1::HalfInt, m2::HalfInt, m3::HalfInt)\n\nCG coefficient langle j_1m_1 j_2m_2  j_3m_3 rangle\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.threeJ","page":"API","title":"CGcoefficient.threeJ","text":"threeJ(j1::HalfInt, j2::HalfInt, j3::HalfInt, m1::HalfInt, m2::HalfInt, m3::HalfInt)\n\nWigner 3j-symbol\n\nbeginpmatrix\nj_1  j_2  j_3 \nm_1  m_2  m_3\nendpmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.sixJ","page":"API","title":"CGcoefficient.sixJ","text":"sixJ(j1::HalfInt, j2::HalfInt, j3::HalfInt, j4::HalfInt, j5::HalfInt, j6::HalfInt)\n\nWigner 6j-symbol\n\nbeginBmatrix\nj_1  j_2  j_3 \nj_4  j_5  j_6\nendBmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.nineJ","page":"API","title":"CGcoefficient.nineJ","text":"nineJ(j1::HalfInt, j2::HalfInt, j3::HalfInt,\n      j4::HalfInt, j5::HalfInt, j6::HalfInt,\n      j7::HalfInt, j8::HalfInt, j9::HalfInt)\n\nWigner 9j-symbol\n\nbeginBmatrix\nj_1  j_2  j_3 \nj_4  j_5  j_6 \nj_7  j_8  j_9\nendBmatrix\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API","title":"API","text":"People often use double of angular momentum quantum number as parameters, so we can use integer as parameters. This package also offers such functions, where the d letter means double.","category":"page"},{"location":"api/","page":"API","title":"API","text":"dCG\nd3j\nd6j\nd9j","category":"page"},{"location":"api/#CGcoefficient.dCG","page":"API","title":"CGcoefficient.dCG","text":"dCG(dj1::Integer, dj2::Integer, dj3::Integer, dm1::Integer, dm2::Integer, dm3::Integer)\n\nCG coefficient function with double angular monentum number parameters, so that the parameters can be integer. You can calculate dCG(1, 1, 2, 1, 1, 2) to calculate the real CG(1//2, 1//2, 1, 1/2, 1//2, 1)\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.d3j","page":"API","title":"CGcoefficient.d3j","text":"d3j(dj1::Integer, dj2::Integer, dj3::Integer, dm1::Integer, dm2::Integer, dm3::Integer)\n\n3j-symbol function with double angular monentum number parameters, so that the parameters can be integer.\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.d6j","page":"API","title":"CGcoefficient.d6j","text":"d6j(dj1::Integer, dj2::Integer, dj3::Integer, dj4::Integer, dj5::Integer, dj6::Integer)\n\n6j-symbol function with double angular monentum number parameters, so that the parameters can be integer.\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.d9j","page":"API","title":"CGcoefficient.d9j","text":"d9j(dj1::Integer, dj2::Integer, dj3::Integer,\n    dj4::Integer, dj5::Integer, dj6::Integer,\n    dj7::Integer, dj8::Integer, dj9::Integer)\n\n9j-symbol function with double angular monentum number parameters, so that the parameters can be integer.\n\n\n\n\n\n","category":"function"},{"location":"api/#Some-useful-function","page":"API","title":"Some useful function","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"iphase\nis_same_parity\ncheck_jm\ncheck_couple","category":"page"},{"location":"api/#CGcoefficient.iphase","page":"API","title":"CGcoefficient.iphase","text":"iphase(n::Integer)\n\n(-1)^n\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.is_same_parity","page":"API","title":"CGcoefficient.is_same_parity","text":"is_same_parity(x::T, y::T) where {T <: Integer}\n\njudge if two integers are same odd or same even\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.check_jm","page":"API","title":"CGcoefficient.check_jm","text":"check_jm(dj::T, dm::T) where {T <: Integer}\n\ncheck if the m-quantum number if one of the components of the j-quantum number, in other words, m and j has the same parity, and abs(m) < j\n\n\n\n\n\n","category":"function"},{"location":"api/#CGcoefficient.check_couple","page":"API","title":"CGcoefficient.check_couple","text":"check_couple(dj1::T, dj2::T, dj3::T) where {T <: Integer}\n\ncheck if three angular monentum number j1, j2, j3 can couple\n\n\n\n\n\n","category":"function"},{"location":"#Home","page":"Home","title":"Home","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A package to calculate CG-coefficient and Wigner 3j, 6j, 9j symbols, and give exact results.","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is inspired by Ref [1]. See CENS-MBPT for details.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The idea is to simplify 3nj Symbols to sum combinations of binominal coefficients. We can calculate binominal coefficients by Pascal's Triangle, and store them first. Then we calculate 3nj Symbols using the stored binominal coefficients.","category":"page"},{"location":"","page":"Home","title":"Home","text":"My code is just a toy model, using Julia's own binominal function, and use BigInt to get absolute results. If you want to get the exact result, and you don't use it for efficient numeric computing, it is really a good package.","category":"page"},{"location":"#Install","page":"Home","title":"Install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Just install with Julia REPL and enjoy it.","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add CGcoefficient","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"push!(LOAD_PATH, \"../../src/\") # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"using CGcoefficient\nsixJ(1,2,3,4,5,6)","category":"page"},{"location":"","page":"Home","title":"Home","text":"In a markdown enviroment, such as jupyter notebook, it will give you a latex output. You can also do some calculations with the result.","category":"page"},{"location":"","page":"Home","title":"Home","text":"sixJ(1,2,3,4,5,6) * SqrtRational(1//7) * SqrtRational(1//13) * iphase(2+3+5+6)","category":"page"},{"location":"","page":"Home","title":"Home","text":"In a console enviroment it will give out a text output.","category":"page"},{"location":"","page":"Home","title":"Home","text":"nineJ(1,2,3,5,4,3,6,6,0)","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also use print function to force print a text output.","category":"page"},{"location":"","page":"Home","title":"Home","text":"a = sixJ(1,2,3,2,1,2)\nprint(a)","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Formula\nAPI","category":"page"},{"location":"","page":"Home","title":"Home","text":"[1]: T. Engeland and M. Hjorth-Jensen, the Oslo-FCI code. https://github.com/ManyBodyPhysics/CENS.","category":"page"}]
}

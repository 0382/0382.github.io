var documenterSearchIndex = {"docs":
[{"location":"nucleus/#MyTools.Nucleus","page":"Nucleus","title":"MyTools.Nucleus","text":"","category":"section"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"原子核物理相关工具函数。","category":"page"},{"location":"nucleus/#同位素","page":"Nucleus","title":"同位素","text":"","category":"section"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"Isotope\ngetZ(::Isotope)\ngetN\ngetA\nBase.show(::IO, ::MIME\"text/plain\", ::Isotope)\nBase.show(::IO, ::MIME\"text/markdown\", ::Isotope)\nBase.parse(::Type{Isotope}, ::AbstractString)","category":"page"},{"location":"nucleus/#MyTools.Nucleus.Isotope","page":"Nucleus","title":"MyTools.Nucleus.Isotope","text":"struct Isotope\n    Z::Int\n    N::Int\nend\n\n同位素。构造函数：\n\nIsotope(iso::Isotope)\nIsotope(Z::Integer, N::Integer)\nIsotope(name::AbstractString)\n\n\n\n\n\n","category":"type"},{"location":"nucleus/#MyTools.Atom.getZ-Tuple{Isotope}","page":"Nucleus","title":"MyTools.Atom.getZ","text":"获取同位素的质子数\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.getN","page":"Nucleus","title":"MyTools.Nucleus.getN","text":"获取同位素的中子数\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.getA","page":"Nucleus","title":"MyTools.Nucleus.getA","text":"获取同位素的核子数\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#Base.show-Tuple{IO,MIME{Symbol(\"text/plain\")},Isotope}","page":"Nucleus","title":"Base.show","text":"以文本形式显示同位素，比如Ne20\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#Base.show-Tuple{IO,MIME{Symbol(\"text/markdown\")},Isotope}","page":"Nucleus","title":"Base.show","text":"以latex形式显示同位素\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#Base.parse-Tuple{Type{Isotope},AbstractString}","page":"Nucleus","title":"Base.parse","text":"parse(::Type{Isotope}, str::AbstractString)\n\n解析核素符号\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#原子核单粒子轨道相关","page":"Nucleus","title":"原子核单粒子轨道相关","text":"","category":"section"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"SingleParticleOrbit\nJOrbit\nMOrbit\nMOrbit(::JOrbit, ::Integer)\nname\nBase.show(::IO, ::JOrbit)\nNuclearShell\nmerge(::NuclearShell, ::NuclearShell)\nj_orbits\nm_orbits\njsize\nmsize\npsize\nnsize\nmax_pj\nmax_nj\npartition\nm_config_size\nHO_shell\nHO_orbits\nValenceSpace\nValenceSpace(::Union{AbstractString, Isotope}, ::Union{NuclearShell, Vector{JOrbit}})\nIsotope(::ValenceSpace, ::Integer, ::Integer)\nIsotope(::Union{AbstractString, Isotope}, ::Integer, ::Integer)\nvalence","category":"page"},{"location":"nucleus/#MyTools.Nucleus.SingleParticleOrbit","page":"Nucleus","title":"MyTools.Nucleus.SingleParticleOrbit","text":"abstract type SingleParticleOrbit end\n\n单粒子轨道\n\n\n\n\n\n","category":"type"},{"location":"nucleus/#MyTools.Nucleus.JOrbit","page":"Nucleus","title":"MyTools.Nucleus.JOrbit","text":"struct JOrbit <: SingleParticleOrbit\n    n::Int  # 主量子数\n    l::Int  # 轨道角动量\n    j::Int  # 总角动量\n    tz::Int # 同位旋\nend\n\nj-shceme 下的单粒子轨道。该结构体以及下面的MOrbit中， 总角动量和同位旋相关量都是使用物理上量子数的两倍来表示，以回避半整数\n\n\n\n\n\n","category":"type"},{"location":"nucleus/#MyTools.Nucleus.MOrbit","page":"Nucleus","title":"MyTools.Nucleus.MOrbit","text":"struct MOrbit <: SingleParticleOrbit\n    n::Int  # 主量子数\n    l::Int  # 轨道角动量\n    j::Int  # 总角动量\n    m::Int  # 总角动量的分量\n    tz::Int # 同位旋\nend\n\nm-scheme 下的单粒子轨道。\n\n\n\n\n\n","category":"type"},{"location":"nucleus/#MyTools.Nucleus.MOrbit-Tuple{JOrbit,Integer}","page":"Nucleus","title":"MyTools.Nucleus.MOrbit","text":"MOrbit(orbit::JOrbit, m::Integer)\n\n通过 j-scheme 的单粒子轨道和m量子数来构造 m-scheme 轨道。\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.name","page":"Nucleus","title":"MyTools.Nucleus.name","text":"name(orbit::SingleParticleOrbit)\n\n单粒子轨道的名字。例如p(0d3/2)，其中最外面的p, n表示质子或者中子， l > 12以后的轨道角动量都用\"x\"表示。（我想也没人对这之后的轨道角动量感兴趣。）\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#Base.show-Tuple{IO,JOrbit}","page":"Nucleus","title":"Base.show","text":"显示j-scheme轨道\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.NuclearShell","page":"Nucleus","title":"MyTools.Nucleus.NuclearShell","text":"struct NuclearShell\n    orbits::Vector{JOrbit}\nend\n\n原子核中壳的概念。实际上就是一系列的轨道组合而已，不保证真的具有物理意义。 按照壳模型计算的一般习惯，只需要j-scheme的轨道就够了。\n\n\n\n\n\n","category":"type"},{"location":"nucleus/#Base.merge-Tuple{NuclearShell,NuclearShell}","page":"Nucleus","title":"Base.merge","text":"merge(ns1::NuclearShell, ns2::NuclearShell)\nmerge(ns1::NuclearShell, ns2::NuclearShell, xns...)\n\n合并两个壳。反正本代码中，壳只是一个计算上的概念，表示一系列轨道的集合。 把这些集合合并起来就是了。\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.j_orbits","page":"Nucleus","title":"MyTools.Nucleus.j_orbits","text":"j_orbits(ns::NuclearShell)\n\n获得壳内所有的j-scheme轨道\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.m_orbits","page":"Nucleus","title":"MyTools.Nucleus.m_orbits","text":"m_orbits(ns::NuclesrShell)\n\n获得壳内所有的m-scheme轨道\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.jsize","page":"Nucleus","title":"MyTools.Nucleus.jsize","text":"jsize(ns::NuclearShell)\n\n壳内有几条j-scheme轨道。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.msize","page":"Nucleus","title":"MyTools.Nucleus.msize","text":"msize(ns::NuclearShell)\n\n计算壳内有几条m-scheme轨道，也就是能够容纳几个核子。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.psize","page":"Nucleus","title":"MyTools.Nucleus.psize","text":"psize(ns::NuclearShell)\n\n计算壳内能够容纳几个质子。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.nsize","page":"Nucleus","title":"MyTools.Nucleus.nsize","text":"nsize(ns::NuclearShell)\n\n计算壳内能够容纳几个中子。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.max_pj","page":"Nucleus","title":"MyTools.Nucleus.max_pj","text":"max_pj(ns::NuclearShell)\n\n计算壳内质子最大角动量。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.max_nj","page":"Nucleus","title":"MyTools.Nucleus.max_nj","text":"max_nj(ns::NuclearShell)\n\n计算壳内中子最大角动量\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.partition","page":"Nucleus","title":"MyTools.Nucleus.partition","text":"partition(n::Int, capacities::AbstractArray)\n\n将 n 个小球放入 length(capacities) 个容器内，每个容器的容量由 capacities 数组指定 生成所有可能的放置方式\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.m_config_size","page":"Nucleus","title":"MyTools.Nucleus.m_config_size","text":"m_config_size(ns::NuclearShell, Z::Integer, N::Integer)\n\n计算某一壳内，Z+N核子数的全组态大小。结果没有问题，效率也还行，但是大体系可能会压不住内存。 光靠GC确实还有不太行，可能用c++来写会好很一点。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.HO_shell","page":"Nucleus","title":"MyTools.Nucleus.HO_shell","text":"HO_shell(N::Integer)\n\n构建一个N = 2n + l的谐振子壳层。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.HO_orbits","page":"Nucleus","title":"MyTools.Nucleus.HO_orbits","text":"HO_orbits(Nmax::Integer)\n\n构建从N = 0到N = Nmax的所有谐振子轨道。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#MyTools.Nucleus.ValenceSpace","page":"Nucleus","title":"MyTools.Nucleus.ValenceSpace","text":"struct ValenceSpace\n    core_neutron::Int\n    core_proton::Int\n    ns::NuclearShell\nend\n\n表示价空间的内。这个还是要有一定物理意义的，价轨道应该在核芯之上。\n\n\n\n\n\n","category":"type"},{"location":"nucleus/#MyTools.Nucleus.ValenceSpace-Tuple{Union{Isotope, AbstractString},Union{Array{JOrbit,1}, NuclearShell}}","page":"Nucleus","title":"MyTools.Nucleus.ValenceSpace","text":"ValenceSpace(core::Union{AbstractString, Isotope}, ns::Union{NuclearShell, Vector{JOrbit}})\n\ncore可以用一个同位素表示，比如^18O，价轨道可以用NuclearShell，也可以直接指定轨道。\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.Isotope-Tuple{ValenceSpace,Integer,Integer}","page":"Nucleus","title":"MyTools.Nucleus.Isotope","text":"Isotope(ns::ValenceSpace, Z::Integer, N::Integer)\n\n给定一个价空间，给定价核子数目，得到核素。\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.Isotope-Tuple{Union{Isotope, AbstractString},Integer,Integer}","page":"Nucleus","title":"MyTools.Nucleus.Isotope","text":"Isotope(core::Union{AbstractString, Isotope}, Z::Integer, N::Integer)\n\n给定一个核芯，以及在其之上的价核子数目，得到核素。这个函数没有价空间大小检查。\n\n\n\n\n\n","category":"method"},{"location":"nucleus/#MyTools.Nucleus.valence","page":"Nucleus","title":"MyTools.Nucleus.valence","text":"valence(iso::Isotope, vs::ValenceSpace)\n\n计算一个核素去掉核芯之后，价核子数目。\n\n\n\n\n\n","category":"function"},{"location":"nucleus/#一些常数","page":"Nucleus","title":"一些常数","text":"","category":"section"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"壳模型常用空间。","category":"page"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"s_shell::NuclearShell\np_shell::NuclearShell\nsd_shell::NuclearShell\npf_shell::NuclearShell","category":"page"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"常用价空间。与NuclearShell版本不同的是ValenceSpace版本还包含了核芯核子数的信息。","category":"page"},{"location":"nucleus/","page":"Nucleus","title":"Nucleus","text":"p_space::ValenceSpace\nsd_space::ValenceSpace\npf_space::ValenceSpace","category":"page"},{"location":"base/#Base","page":"Base","title":"Base","text":"","category":"section"},{"location":"base/","page":"Base","title":"Base","text":"基础工具。","category":"page"},{"location":"base/#向量","page":"Base","title":"向量","text":"","category":"section"},{"location":"base/","page":"Base","title":"Base","text":"Vec","category":"page"},{"location":"base/#MyTools.Vec","page":"Base","title":"MyTools.Vec","text":"struct Vec{N, T<:Real} <: AbstractVector{T}\nconst Vec2{T} = Vec{2, T}\nconst Vec3{T} = Vec{3, T}\nconst Vec4{T} = Vec{4, T}\n\n笛卡尔坐标系向量。\n\n\n\n\n\n","category":"type"},{"location":"base/","page":"Base","title":"Base","text":"定义了基本的向量加减法、数乘（除）\n实现了AbstractVector的借口，引入LinearAlgebra即可进行内外积操作\n对于维度小于等于4的向量，可以使用.x, .y, .z, .w索引取值（不可更改）","category":"page"},{"location":"base/#泡利矩阵代数","page":"Base","title":"泡利矩阵代数","text":"","category":"section"},{"location":"base/","page":"Base","title":"Base","text":"定义了常数σ0, σx, σy, σz, σv，分别表示单位矩阵、三个泡利矩阵、泡利矩阵向量。","category":"page"},{"location":"base/","page":"Base","title":"Base","text":"⊗(::AbstractVector, ::AbstractVector)\r\n⊗(::AbstractMatrix, ::AbstractMatrix)","category":"page"},{"location":"base/#MyTools.:⊗-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T}","page":"Base","title":"MyTools.:⊗","text":"⊗(x::AbstractVector, y::AbstractVector)\n\n张量积\n\n\n\n\n\n","category":"method"},{"location":"base/#MyTools.:⊗-Tuple{AbstractArray{T,2} where T,AbstractArray{T,2} where T}","page":"Base","title":"MyTools.:⊗","text":"⊗(x::AbstractMatrix, y::AbstractMatrix)\n\n张量积\n\n\n\n\n\n","category":"method"},{"location":"tool/#MyTools.Tool","page":"Tool","title":"MyTools.Tool","text":"","category":"section"},{"location":"tool/","page":"Tool","title":"Tool","text":"一些无法归类的工具。","category":"page"},{"location":"tool/","page":"Tool","title":"Tool","text":"GPA\nget_id_check_code\ncheck_idcard","category":"page"},{"location":"tool/#MyTools.Tool.GPA","page":"Tool","title":"MyTools.Tool.GPA","text":"GPA(score::Int)::Float64\n\n北大 GPA 计算公式\n\n\n\n\n\n","category":"function"},{"location":"tool/#MyTools.Tool.get_id_check_code","page":"Tool","title":"MyTools.Tool.get_id_check_code","text":"get_id_check_code(id17::AbstractString)::Char\n\n根据前面17位身份证数字计算校验码\n\n\n\n\n\n","category":"function"},{"location":"tool/#MyTools.Tool.check_idcard","page":"Tool","title":"MyTools.Tool.check_idcard","text":"check_idcard(id::AbstractString)::Bool\n\n检验身份证校验码是否正确\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom","page":"Atom","title":"MyTools.Atom","text":"","category":"section"},{"location":"atom/","page":"Atom","title":"Atom","text":"元素周期表相关函数。","category":"page"},{"location":"atom/#简介","page":"Atom","title":"简介","text":"","category":"section"},{"location":"atom/","page":"Atom","title":"Atom","text":"借助本库，你可以从任意名称构造元素，也可以从在元素的任意表示形式上做转换。","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"push!(LOAD_PATH, \"../../src/\")\nusing MyTools.Atom","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"构建元素struct","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"Element(\"Fe\")","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"Element(\"氦\")","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"名称转换","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"getZ(\"溴\")","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"chinese(\"Zr\")","category":"page"},{"location":"atom/","page":"Atom","title":"Atom","text":"symbol(82)","category":"page"},{"location":"atom/#API列表","page":"Atom","title":"API列表","text":"","category":"section"},{"location":"atom/","page":"Atom","title":"Atom","text":"Element\nNoneElement\nis_none\ngetZ(::ElementConstructType)\natomic_number\nsymbol\nchinese\nenglish\nlatin\npinyin\nshow_element_table\nfind_element_with_Z\nfind_element_with_symbol\nfind_element_with_chinese\nfind_element_with_english\nfind_element_with_latin\nfind_element_with_pinyin\nfind_element","category":"page"},{"location":"atom/#MyTools.Atom.Element","page":"Atom","title":"MyTools.Atom.Element","text":"struct Element\n    atomic_number::Int\n    symbol_name::String\n    chinese_name::String\n    english_name::String\n    latin_name::String\n    pinyin_name::String\nend # struct Element\n\n元素结构体，包含元素的原子序数，元素符号，中文名，英文名，拉丁文名，拼音名。\n\n构造函数：\n\nElement(Z, sym, chinese, english, latin, pinyin)\nElement(ele::Element)                         # identity\nElement(Z::Integer)                           # 从原子序数构造\nElement(name::Union{AbstractString, Symbol})  # 从任何名称构造，比如 \"Fe\", \"铝\", \"Oxygen\"\n\n\n\n\n\n","category":"type"},{"location":"atom/#MyTools.Atom.NoneElement","page":"Atom","title":"MyTools.Atom.NoneElement","text":"不存在的元素\n\n\n\n\n\n","category":"constant"},{"location":"atom/#MyTools.Atom.is_none","page":"Atom","title":"MyTools.Atom.is_none","text":"判断是否为不存在的元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.getZ-Tuple{Union{Element, AbstractString, Integer, Symbol}}","page":"Atom","title":"MyTools.Atom.getZ","text":"获取原子序数\n\n\n\n\n\n","category":"method"},{"location":"atom/#MyTools.Atom.atomic_number","page":"Atom","title":"MyTools.Atom.atomic_number","text":"获取原子序数\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.symbol","page":"Atom","title":"MyTools.Atom.symbol","text":"获取元素符号\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.chinese","page":"Atom","title":"MyTools.Atom.chinese","text":"获取元素中文名\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.english","page":"Atom","title":"MyTools.Atom.english","text":"获取元素英文名\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.latin","page":"Atom","title":"MyTools.Atom.latin","text":"获取元素拉丁文名\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.pinyin","page":"Atom","title":"MyTools.Atom.pinyin","text":"获取元素中文名拼音\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.show_element_table","page":"Atom","title":"MyTools.Atom.show_element_table","text":"show_element_table(type::AbstractString=\"symbol\")\n\n打印元素周期表，type可以是\"symbol\", \"chinese\"两种\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element_with_Z","page":"Atom","title":"MyTools.Atom.find_element_with_Z","text":"通过原子序数查找元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element_with_symbol","page":"Atom","title":"MyTools.Atom.find_element_with_symbol","text":"通过元素符号查找元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element_with_chinese","page":"Atom","title":"MyTools.Atom.find_element_with_chinese","text":"通过元素中文名查找元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element_with_english","page":"Atom","title":"MyTools.Atom.find_element_with_english","text":"通过元素英文名查找元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element_with_latin","page":"Atom","title":"MyTools.Atom.find_element_with_latin","text":"通过元素拉丁文名查找元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element_with_pinyin","page":"Atom","title":"MyTools.Atom.find_element_with_pinyin","text":"通过元素拼音查找元素\n\n\n\n\n\n","category":"function"},{"location":"atom/#MyTools.Atom.find_element","page":"Atom","title":"MyTools.Atom.find_element","text":"find_element(name::Union{Integer, AbstractString})\n\n通过任何名称查找元素，包括使用原子序数\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini","page":"Ini","title":"MyTools.Ini","text":"","category":"section"},{"location":"ini/#Types","page":"Ini","title":"Types","text":"","category":"section"},{"location":"ini/","page":"Ini","title":"Ini","text":"IniFile\nIniSection\nIniItem","category":"page"},{"location":"ini/#MyTools.Ini.IniFile","page":"Ini","title":"MyTools.Ini.IniFile","text":"IniFile(fname::AbstractString)\n\nIniFile struct, with several sections, including default section. Construct it with a file name.\n\n\n\n\n\n","category":"type"},{"location":"ini/#MyTools.Ini.IniSection","page":"Ini","title":"MyTools.Ini.IniSection","text":"A ini file section.\n\n\n\n\n\n","category":"type"},{"location":"ini/#MyTools.Ini.IniItem","page":"Ini","title":"MyTools.Ini.IniItem","text":"A key = value item.\n\n\n\n\n\n","category":"type"},{"location":"ini/#Functions","page":"Ini","title":"Functions","text":"","category":"section"},{"location":"ini/","page":"Ini","title":"Ini","text":"isgood\nerror_msg\ngetValue\ngetString\ngetBool\ngetInt\ngetFloat\nBase.show(::IO, ::IniFile)\nsaveAs","category":"page"},{"location":"ini/#MyTools.Ini.isgood","page":"Ini","title":"MyTools.Ini.isgood","text":"isgood(ini::IniFile)\n\nDetermine if the ini file is opened successful.\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini.error_msg","page":"Ini","title":"MyTools.Ini.error_msg","text":"error_msg(ini::IniFile)\n\nGet error message of IniFile.\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini.getValue","page":"Ini","title":"MyTools.Ini.getValue","text":"getValue(ini::IniFile, section::AbstractString, key::AbstractString)\ngetValue(ini::IniFile, key::AbstractString)\n\nGet a value with a key in one section. The version without section name searches the default section.\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini.getString","page":"Ini","title":"MyTools.Ini.getString","text":"getString(ini::IniFile, section::AbstractString, key::AbstractString)\ngetString(ini::IniFile, key::AbstractString)\n\nGet a string value with a key in one section. The version without section name searches the default section.\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini.getBool","page":"Ini","title":"MyTools.Ini.getBool","text":"getBool(ini::IniFile, section::AbstractString, key::AbstractString)\ngetBool(ini::IniFile, key::AbstractString)\n\nGet a boolean value with a key in one section. The version without section name searches the default section.\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini.getInt","page":"Ini","title":"MyTools.Ini.getInt","text":"getInt(ini::IniFile, section::AbstractString, key::AbstractString)\ngetInt(ini::IniFile, key::AbstractString)\n\nGet a integer value with a key in one section. The version without section name searches the default section.\n\n\n\n\n\n","category":"function"},{"location":"ini/#MyTools.Ini.getFloat","page":"Ini","title":"MyTools.Ini.getFloat","text":"getFloat(ini::IniFile, section::AbstractString, key::AbstractString)\ngetFloat(ini::IniFile, key::AbstractString)\n\nGet a floating point value with a key in one section. The version without section name searches the default section.\n\n\n\n\n\n","category":"function"},{"location":"ini/#Base.show-Tuple{IO,IniFile}","page":"Ini","title":"Base.show","text":"Base.show(io::IO, ini::IniFile)\n\nImport Base.show to print a IniFile.\n\n\n\n\n\n","category":"method"},{"location":"ini/#MyTools.Ini.saveAs","page":"Ini","title":"MyTools.Ini.saveAs","text":"saveAs(ini::IniFile, fname::AbstractString)\n\nSave the ini file to file.\n\n\n\n\n\n","category":"function"},{"location":"#MyTools","page":"MyTools","title":"MyTools","text":"","category":"section"},{"location":"","page":"MyTools","title":"MyTools","text":"","category":"page"}]
}

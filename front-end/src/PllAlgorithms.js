let PllAlgorithms = [{
  algorithm: "[R U' R] U R U R U' R' U' R2",
  name: 'Ua perm',
  number: 1,
  image: 'Ua.png',
  category: "edge"
},
{
  algorithm: "R2 U R U R' U' R' U' R' U R'",
  name: 'Ub perm',
  number: 2,
  image: 'Ub.png',
  category: "edge"
},
{
  algorithm: "M2 U M2 U M' U2 M2 U2 M' U2",
  name: 'Z perm',
  number: 3,
  image: 'Z.png',
  category: "edge"
},
{
  algorithm: "M2 U M2 U2 M2 U M2",
  name: 'H perm',
  number: 4,
  image: 'H.png',
  category: "edge"
},
{
  algorithm: "l' U R' D2 R U' R' D2 R2",
  name: 'Aa perm',
  number: 5,
  image: 'Aa.png',
  category: "corner"
},
{
  algorithm: "l U' R D2 R' U R D2 R2",
  name: 'Ab perm',
  number: 6,
  image: 'Ab.png',
  category: "corner"
},
{
  algorithm: "x' [R U' R' D] [R U R' D'] [R U R' D] [R U' R' D']",
  name: 'E perm',
  number: 7,
  image: 'E.png',
  category: "corner"
},
{
  algorithm: "[R U R' U'] R' F R2 U' R' U' [R U R' F']",
  name: 'T perm',
  number: 8,
  image: 'T.png',
  category: "swap"
},
{
  algorithm: "R' U2 R' d' R' F' R2 U' R' U R' F R U' F",
  name: 'F perm',
  number: 9,
  image: 'F.png',
  category: "swap"
},
{
  algorithm: "[R' U L'] U2 [R U' R' U2] [L R U']",
  name: 'Ja perm',
  number: 10,
  image: 'Ja.png',
  category: "swap"
},
{
  algorithm: "[R U R' F'] [R U R' U' R' F] [R2 U' R' U']",
  name: 'Jb perm',
  number: 11,
  image: 'Jb.png',
  category: "swap"
},
{
  algorithm: "[L U2' L' U2'] L F' L' U' L U L F L2' U",
  name: 'Ra perm',
  number: 12,
  image: 'Ra.png',
  category: "swap"
},
{
  algorithm: "[R' U2 R U2] R' F R U R' U' R' F' R2 U'",
  name: 'Rb perm',
  number: 13,
  image: 'Rb.png',
  category: "swap"
},
{
  algorithm: "[R' U R' d'] R' F' R2 U' R' U R' F R F",
  name: 'V perm',
  number: 14,
  image: 'V.png',
  category: "swap"
},
{
  algorithm: "[F R U' R' U' R U R' F'] [R U R' U'] [R' F R F']",
  name: 'Y perm',
  number: 15,
  image: 'Y.png',
  category: "swap"
},
{
  algorithm: "{L U' R U2 L' U R'} {L U' R U2 L' U R'} U",
  name: 'Na perm',
  number: 16,
  image: 'Na.png',
  category: "swap"
},
{
  algorithm: "{R' U L' U2 R U' L} {R' U L' U2 R U' L} U'",
  name: 'Nb perm',
  number: 17,
  image: 'Nb.png',
  category: "swap"
},
{
  algorithm: "[R2 u] R' U R' U' R u' R2 y' [R' U R]",
  name: 'Ga perm',
  number: 18,
  image: 'Ga.png',
  category: "cycle"
},
{
  algorithm: "[L' U' L] y' {R2 u R' U R U' R u' R2}",
  name: 'Gb perm',
  number: 19,
  image: 'Gb.png',
  category: "cycle"
},
{
  algorithm: "[R2 u'] R U' R U R' u R2 y [R U' R']",
  name: 'Gc perm',
  number: 20,
  image: 'Gc.png',
  category: "cycle"
},
{
  algorithm: "[R U R'] y' R2 u' R U' R' U R' u R2",
  name: 'Gd perm',
  number: 21,
  image: 'Gd.png',
  category: "cycle"
}]

export default PllAlgorithms;

/** @format */

const conversiNilai = (a: number) => {
    switch (a) {
      case 90:
        console.log("Nilai adalah 90");
        break;
      case 80:
        console.log("Nilai adalah 80");
        break;
      default:
        break;
    }
  };
  
//   conversiNilai(80);
  


const treeName = (name: string) => {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
};
console.log(treeName("salman"));

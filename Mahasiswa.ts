export interface DataMahasiswa{
    nim : string
}

export class Mahasiswa{

    public polaSegita(data : DataMahasiswa):void{

        let getNim = data.nim;
        const lastNim = getNim.substring(data.nim.length - 1);
        
        for(let i : number =1; i <=  parseInt(lastNim); i++){

            let result = "";
            
            for(let j: number = 1; j <= i; j++){
                result += j + " ";
            }

            console.log(result);
        }

    }

    public DeretAritmatika(data: DataMahasiswa , maxLength: number): void{

        const nim = data.nim;
        let start = parseInt(nim.substring(data.nim.length - 2));
        let step = (parseInt((nim.substring(data.nim.length - 3 , data.nim.length -2))));
        
        let result = "";
        for(let i: number = 0; i < maxLength; i++){

            result+= (start + ((step+1)*i)) + ", ";

        }

        console.log(result.substring(0, result.length - 2));
       

    }

    public BilanganPrima(data: DataMahasiswa, maxLength :number):void{

        const nim = data.nim;
        let finalLength = parseInt(nim.substring(data.nim.length - 2)) + maxLength;

        let result = "";
        for(let i: number = 1; i<= finalLength;i++){

            if(i < 2) continue

            let isPrima = true;

            for(let j : number = 2; j <= Math.sqrt(i);j++){
                if(i % j === 0){
                    isPrima =false;
                    break;
                }
            }

            if(isPrima){
                result += i + ", ";
            }

        }

        console.log(result.substring(0, result.length - 2));
        
    }

}
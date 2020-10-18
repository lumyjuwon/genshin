const characters = ['벤티', '각청', '다이루크', '모나', '진', '치치'];

interface Data{
  WIN_TARGET: string;
  WIN_PERCENT: number;
  WIN_ITEMS: Array<string>;
  NORMAL_ITEMS: Array<string>;
  PICK_UP_PERCENT: number;
  MAX_PITY_COUNT: number;
  MAX_FAVORITE_COUNT: number;
}

export class GachaData implements Data{
  readonly WIN_TARGET: string;
  readonly WIN_PERCENT: number;
  readonly WIN_ITEMS: Array<string>;
  readonly NORMAL_ITEMS: Array<string>;
  readonly PICK_UP_PERCENT: number;
  readonly MAX_PITY_COUNT: number;
  readonly MAX_FAVORITE_COUNT: number;

  constructor(data: Data){
    this.WIN_TARGET = data.WIN_TARGET;
    this.WIN_PERCENT = data.WIN_PERCENT;
    this.WIN_ITEMS = data.WIN_ITEMS;
    this.NORMAL_ITEMS = data.NORMAL_ITEMS;
    this.PICK_UP_PERCENT = data.PICK_UP_PERCENT;
    this.MAX_PITY_COUNT = data.MAX_PITY_COUNT;
    this.MAX_FAVORITE_COUNT = data.MAX_FAVORITE_COUNT;

    this.isValidData();
  }

  isValidData(){
    /// NORMAL_ITEMS에 WIN_ITEMS가 절대 포함되면 안 됨 이라는 코드 작성 필요
  }
}

export class Gacha {
  private data: GachaData;
  public totalCount: number;
  public pityCount: number;
  public favoriteCount: number;

  constructor(gachaData: GachaData){
    this.data = gachaData;
    this.totalCount = 0;
    this.pityCount = 0;
    this.favoriteCount = 0;
  }

  winGacha(){
    this.pityCount = 0;

    if(this.favoriteCount === this.data.MAX_FAVORITE_COUNT){
      console.log('벤티')
      this.favoriteCount = 0;
    }
    else{
      const isPickUp = Math.random() * 100 < this.data.PICK_UP_PERCENT;

      if(isPickUp){
        console.log('벤티');
        this.favoriteCount = 0;
      }
      else{
        const percent = Math.random() * 100;
        const characterIndex:number = Math.floor(percent % characters.length);
        const resultCharacter = characters[characterIndex];

        console.log(resultCharacter);
      }
    }
  }
  
  normalGacha(){
  }

  start(tries: number){
    this.totalCount += tries;

    for(let i = 0; i<tries; i++){
      this.pityCount += 1;
      this.favoriteCount += 1;

      if(this.pityCount === this.data.MAX_PITY_COUNT || this.favoriteCount === this.data.MAX_FAVORITE_COUNT){
        this.winGacha();
      }
      else{
        const isWin = Math.random() * 100 <= this.data.WIN_PERCENT;

        if(isWin){
          this.winGacha();
        }
        else{
          this.normalGacha();
        }
      }
    }

    console.log('Pity Count', this.pityCount);
    console.log('Favorite Count', this.favoriteCount)
  }
}


interface Data{
  WIN_TARGET: Array<string>;
  WIN_ITEMS: Array<string>;
  FOUR_PICK_UP_LIST: Array<string>;
  FOUR_ITEMS: Array<string>;
  THREE_ITEMS: Array<string>;
  FIVE_PICK_UP_PERCENT: number;
  FOUR_PICK_UP_PERCENT: number;
  FIVE_PERCENT: number;
  FOUR_PERCENT: number;
  MAX_PITY_COUNT: number;
  MAX_FAVORITE_COUNT: number;
}

export class GachaData implements Data{
  readonly WIN_TARGET: Array<string>;
  readonly WIN_ITEMS: Array<string>;
  readonly FOUR_PICK_UP_LIST: Array<string>;
  readonly FOUR_ITEMS: Array<string>;
  readonly THREE_ITEMS: Array<string>;
  readonly FIVE_PICK_UP_PERCENT: number;
  readonly FOUR_PICK_UP_PERCENT: number;
  readonly FIVE_PERCENT: number;
  readonly FOUR_PERCENT: number;
  readonly MAX_PITY_COUNT: number;
  readonly MAX_FAVORITE_COUNT: number;

  constructor(data: Data){
    this.WIN_TARGET = data.WIN_TARGET;
    this.WIN_ITEMS = data.WIN_ITEMS;
    this.FOUR_PICK_UP_LIST = data.FOUR_PICK_UP_LIST;
    this.FOUR_ITEMS = data.FOUR_ITEMS;
    this.THREE_ITEMS = data.THREE_ITEMS;
    this.FIVE_PICK_UP_PERCENT = data.FIVE_PICK_UP_PERCENT;
    this.FOUR_PICK_UP_PERCENT = data.FOUR_PICK_UP_PERCENT;
    this.FIVE_PERCENT = data.FIVE_PERCENT;
    this.FOUR_PERCENT = data.FOUR_PERCENT;
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
  public gachaResult: Array<string>;

  constructor(gachaData: GachaData){
    this.data = gachaData;
    this.totalCount = 0;
    this.pityCount = 0;
    this.favoriteCount = 0;
    this.gachaResult = [];
  }

  // 5성 뽑기
  winGacha(): string {
    this.pityCount = 0;
    let resultCharacter: string;

    if(this.favoriteCount === this.data.MAX_FAVORITE_COUNT){
      this.favoriteCount = 0;
      const characterIndex: number = Math.floor(Math.random() * this.data.WIN_TARGET.length)
      resultCharacter = this.data.WIN_TARGET[characterIndex];
    }
    else{
      const isPickUp = Math.random() * 100 <= this.data.FIVE_PICK_UP_PERCENT;

      // WIN_TARGET중에서 랜덤
      if(isPickUp){
        this.favoriteCount = 0;
        const characterIndex: number = Math.floor(Math.random() * this.data.WIN_TARGET.length)
        resultCharacter = this.data.WIN_TARGET[characterIndex];
      }
      // WIN_TARGET을 제외한 5성에서 랜덤
      else{
        const percent = Math.random() * 100;
        const nonPickUpCharacters: Array<string> = this.data.WIN_ITEMS.filter(
          (v: string) => !this.data.WIN_TARGET.includes(v)
        );
        const characterIndex:number = Math.floor(percent % nonPickUpCharacters.length);
        resultCharacter = nonPickUpCharacters[characterIndex];
      }
    }
    return resultCharacter;
  }
  
  // 4~3성 가챠
  normalGacha(): string {
    const isFour = Math.random() * 100 <= this.data.FOUR_PERCENT;
    let resultCharacter: string;
    
    if(isFour) {
      const isFourPickUp = Math.random() * 100 <= this.data.FOUR_PICK_UP_PERCENT;

      // 4성 픽업
      if (isFourPickUp) {
        const characterIndex = Math.floor(Math.random() * this.data.FOUR_PICK_UP_LIST.length);
        resultCharacter = this.data.FOUR_PICK_UP_LIST[characterIndex]

      // 나머지 4성
      } else {
        const nonPickUpCharacters = this.data.FOUR_ITEMS.filter(
          (v: string) => !this.data.FOUR_PICK_UP_LIST.includes(v)
        );
        const characterIndex = Math.floor(Math.random() * nonPickUpCharacters.length);
        resultCharacter = nonPickUpCharacters[characterIndex];
      }

    } else {
      const characterIndex = Math.floor(Math.random() * this.data.THREE_ITEMS.length);
      resultCharacter = this.data.THREE_ITEMS[characterIndex];
    }
    return resultCharacter;
  }

  start(tries: number): Array<string> {
    this.totalCount += tries;

    for(let i = 0; i<tries; i++){
      this.pityCount += 1;
      this.favoriteCount += 1;

      if(this.pityCount === this.data.MAX_PITY_COUNT || this.favoriteCount === this.data.MAX_FAVORITE_COUNT){
        this.gachaResult.push(this.winGacha());
      }
      else{
        const isFive = Math.random() * 100 <= this.data.FIVE_PERCENT;

        if(isFive){
          this.gachaResult.push(this.winGacha());
        }
        else{
          this.gachaResult.push(this.normalGacha());
        }
      }
    }
    
    console.log('Pity Count', this.pityCount);
    console.log('Favorite Count', this.favoriteCount)
    return this.gachaResult;
  }

  getGachaCount(): number {
    return this.totalCount;
  }
}
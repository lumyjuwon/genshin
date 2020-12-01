export interface GachaExecutionInfo {
  gemImageName: string;
  excution10ConsumeGem: number;
}

export interface StackInfo {
  [stack: string]: number;
}

export interface GachaInfo {
  percent: number;
  items: Array<string>;
  pickUpPercent: number;
  pickUpItems: Array<string>;
}

export interface GachaData {
  pickUpTarget: Array<string>;
  maxPityCount: number;
  maxPickUpCount: number;
  maxBonusCount: number;
  guaranteeItem: string;
  executionInfo: GachaExecutionInfo;
  stackPercentage: StackInfo;
  fiveStars: GachaInfo;
  fourStars: GachaInfo;
  threeStars: GachaInfo;
}

export class GachaContent implements GachaData {
  readonly pickUpTarget: Array<string>;
  readonly maxPityCount: number;
  readonly maxPickUpCount: number;
  readonly maxBonusCount: number;
  readonly guaranteeItem: string;
  readonly executionInfo: GachaExecutionInfo;
  readonly stackPercentage: StackInfo;
  readonly fiveStars: GachaInfo;
  readonly fourStars: GachaInfo;
  readonly threeStars: GachaInfo;

  constructor(data: GachaData) {
    this.pickUpTarget = data.pickUpTarget;
    this.maxPityCount = data.maxPityCount;
    this.maxPickUpCount = data.maxPickUpCount;
    this.maxBonusCount = data.maxBonusCount;
    this.guaranteeItem = data.guaranteeItem;
    this.executionInfo = data.executionInfo;
    this.stackPercentage = data.stackPercentage;
    this.fiveStars = data.fiveStars;
    this.fourStars = data.fourStars;
    this.threeStars = data.threeStars;

    this.isValidData();
  }

  isValidData() {
    /// NORMAL_ITEMS에 WIN_ITEMS가 절대 포함되면 안 됨 이라는 코드 작성 필요
  }
}

export class GachaController {
  public readonly data: GachaContent;
  public totalCount: number;
  public pityCount: number;
  public favoriteCount: number;
  public isGuaranteeItem: boolean;
  public isNextFivePickUp: boolean;
  public isNextFourPickUp: boolean;

  constructor(gachaData: GachaContent) {
    this.data = gachaData;
    this.totalCount = 0;
    this.pityCount = 0;
    this.favoriteCount = 0;
    this.isGuaranteeItem = false;
    this.isNextFivePickUp = false;
    this.isNextFourPickUp = false;
  }

  setCount(totalCount: number, pityCount: number, favoriteCount: number) {
    this.totalCount = totalCount;
    this.pityCount = pityCount;
    this.favoriteCount = favoriteCount;
  }

  setNextPickUp(isNextFivePickUp: boolean, isNextFourPickUp: boolean) {
    this.isNextFivePickUp = isNextFivePickUp;
    this.isNextFourPickUp = isNextFourPickUp;
  }

  pick(info: GachaInfo): string {
    const isPickUp = Math.random() * 100 <= info.pickUpPercent;
    let resultItem: string;

    // Check Pick Up
    if (isPickUp) {
      const itemIndex = Math.floor(Math.random() * info.pickUpItems.length);
      resultItem = info.pickUpItems[itemIndex];
    }
    // Not Pick Up
    else {
      const nonPickUpItems: Array<string> = info.items.filter((item: string) => !info.pickUpItems.includes(item));
      const itemIndex: number = Math.floor(Math.random() * nonPickUpItems.length);
      resultItem = nonPickUpItems[itemIndex];
    }

    return resultItem;
  }

  nextIsPickUp(info: GachaInfo, isNextPickUp: boolean): string {
    let resultItem: string;

    if (info.pickUpItems.length > 0) {
      if (isNextPickUp) {
        console.log('무조건 픽업입니다.');
        const characterIndex = Math.floor(Math.random() * info.pickUpItems.length);
        resultItem = info.pickUpItems[characterIndex];
        console.log('바꾼다!');
        isNextPickUp = false;
      } else {
        console.log('픽업이 아닐수도 있습니다.');
        resultItem = this.pick(info);
        console.log('바꾼다!');
        isNextPickUp = true;
      }
    } else {
      resultItem = this.pick(info);
    }

    return resultItem;
  }

  start(tries: number): Array<string> {
    this.totalCount += tries;
    const resultItems = new Array<string>();

    for (let i = 0; i < tries; i++) {
      this.pityCount += 1;
      this.favoriteCount += 1;

      console.log('favo', this.favoriteCount);

      // 4성이상 보장, 초보자 Noelle
      if (this.data.maxBonusCount === tries && i === 0) {
        const percent = Math.random() * 100;
        let resultItem: string;

        if (this.data.guaranteeItem && !this.isGuaranteeItem) {
          resultItem = this.data.guaranteeItem;
          this.isGuaranteeItem = true;
        } else if (percent <= this.data.fiveStars.percent) {
          resultItem = this.pick(this.data.fiveStars);
          this.pityCount = 0;

          if (this.data.fiveStars.pickUpItems.includes(resultItem)) {
            this.favoriteCount = 0;
            console.log('바꾼다!');
            this.isNextFivePickUp = false;
            console.log('개런티. 5성 픽업을 포함해 false', this.isNextFivePickUp);
          } else {
            console.log('바꾼다!');
            this.isNextFivePickUp = true;
            console.log('개런티. 5성 픽업이 아니여서 true', this.isNextFivePickUp);
          }
        } else {
          console.log('넣기전', this.isNextFourPickUp);
          resultItem = this.nextIsPickUp(this.data.fourStars, this.isNextFourPickUp);

          if (this.data.fourStars.pickUpItems.includes(resultItem)) {
            console.log('바꾼다!');
            this.isNextFourPickUp = false;
            console.log('개런티. 4성 픽업을 포함해 false', this.isNextFourPickUp);
          } else {
            console.log('바꾼다!');
            this.isNextFourPickUp = true;
            console.log('개런티. 4성 픽업이 아니여서 true', this.isNextFourPickUp);
          }
        }

        resultItems.push(resultItem);
      }

      // maxPickUpCount 천장
      else if (this.favoriteCount === this.data.maxPickUpCount) {
        let resultItem: string;

        if (this.data.fiveStars.pickUpItems.length > 0) {
          const characterIndex = Math.floor(Math.random() * this.data.pickUpTarget.length);
          resultItem = this.data.pickUpTarget[characterIndex];
        } else {
          resultItem = this.pick(this.data.fiveStars);
        }

        console.log('0으로 초기화합니다. 180천장');
        this.pityCount = 0;
        this.favoriteCount = 0;
        console.log('바꾼다!');
        this.isNextFivePickUp = false;
        console.log('다음 5성은 픽업이 아닐수도 있습니다. 180천장, false', this.isNextFivePickUp);

        resultItems.push(resultItem);
      }

      // maxPityCount 천장
      else if (this.pityCount === this.data.maxPityCount) {
        const resultItem = this.nextIsPickUp(this.data.fiveStars, this.isNextFivePickUp);
        this.pityCount = 0;

        if (this.data.pickUpTarget.includes(resultItem)) {
          console.log('0으로 초기화합니다. 90천장');
          this.favoriteCount = 0;
          console.log('바꾼다!');
          this.isNextFivePickUp = false;
          console.log('다음 5성은 픽업이 아닐수도 있습니다. 90천장, false', this.isNextFivePickUp);
        } else {
          console.log('바꾼다!');
          this.isNextFivePickUp = true;
          console.log('다음 5성은 무조건 픽업입니다. 90천장, true', this.isNextFivePickUp);
        }

        resultItems.push(resultItem);
      }

      // 일반 뽑기
      else {
        const percent = Math.random() * 100;
        let resultItem: string;

        // 확률 보정으로 인해 pityCount가 n번 이상 부터는 p% 확률 적용
        let maxStack = 0;
        let fiveStarPercent = this.data.fiveStars.percent;
        Object.keys(this.data.stackPercentage).forEach((stack) => {
          if (this.pityCount >= +stack && +stack > maxStack) {
            maxStack = +stack;
            fiveStarPercent = this.data.stackPercentage[stack];
          }
        });

        if (percent <= fiveStarPercent) {
          resultItem = this.nextIsPickUp(this.data.fiveStars, this.isNextFivePickUp);
          this.pityCount = 0;

          if (this.data.fiveStars.pickUpItems.includes(resultItem)) {
            console.log('0으로 초기화합니다. normal');
            this.favoriteCount = 0;
            console.log('바꾼다!');
            this.isNextFivePickUp = false;
            console.log('다음 5성은 픽업이 아닐수도 있습니다. normal, false', this.isNextFivePickUp);
          } else {
            console.log('바꾼다!');
            this.isNextFivePickUp = true;
            console.log('다음 5성은 무조건 픽업입니다. normal, true', this.isNextFivePickUp);
          }
        } else if (percent <= this.data.fiveStars.percent + this.data.fourStars.percent) {
          resultItem = this.nextIsPickUp(this.data.fourStars, this.isNextFourPickUp);

          if (this.data.fourStars.pickUpItems.includes(resultItem)) {
            console.log('바꾼다!');
            this.isNextFourPickUp = false;
            console.log('다음 4성은 픽업이 아닐수도 있습니다. normal, false', this.isNextFourPickUp);
          } else {
            console.log('바꾼다!');
            this.isNextFourPickUp = true;
            console.log('다음 4성은 픽업입니다. normal, true', this.isNextFourPickUp);
          }
        } else {
          resultItem = this.pick(this.data.threeStars);
        }

        resultItems.push(resultItem);
      }
    }

    return resultItems;
  }
}

/**
 * 동적배열 구현 - 분할상환분석 예제
 *
 * 이 클래스는 동적배열의 동작을 시뮬레이션하고,
 * 각 연산의 비용을 추적하여 분할상환분석을 보여줍니다.
 */

interface OperationCost {
  operationNumber: number;      // 연산 번호
  insertCost: number;           // 요소 추가 비용 (항상 1)
  copyCost: number;             // 배열 복사 비용 (용량 확장 시)
  totalCost: number;            // 해당 연산의 총 비용
  cumulativeCost: number;       // 누적 총 비용
  amortizedCost: number;        // 분할상환 비용 (누적/연산수)
  currentCapacity: number;      // 현재 배열 용량
  currentSize: number;          // 현재 배열 크기
}

class DynamicArray<T> {
  private array: (T | undefined)[];
  private size: number;
  private capacity: number;
  private costHistory: OperationCost[];
  private totalCost: number;
  private operationCount: number;

  constructor(initialCapacity: number = 1) {
    this.capacity = initialCapacity;
    this.array = new Array(initialCapacity);
    this.size = 0;
    this.costHistory = [];
    this.totalCost = 0;
    this.operationCount = 0;
  }

  /**
   * 요소를 배열에 추가합니다.
   * 배열이 가득 찬 경우, 용량을 2배로 확장합니다.
   */
  push(element: T): void {
    this.operationCount++;

    let insertCost = 1;  // 요소를 추가하는 비용은 항상 1
    let copyCost = 0;    // 복사가 필요한 경우에만 발생

    // 배열이 가득 찬 경우: 용량 확장 필요
    if (this.size === this.capacity) {
      copyCost = this.size;  // 현재 모든 요소를 복사해야 함
      this.resize();
    }

    // 요소 추가
    this.array[this.size] = element;
    this.size++;

    // 비용 기록
    const operationCost = insertCost + copyCost;
    this.totalCost += operationCost;

    const costRecord: OperationCost = {
      operationNumber: this.operationCount,
      insertCost: insertCost,
      copyCost: copyCost,
      totalCost: operationCost,
      cumulativeCost: this.totalCost,
      amortizedCost: this.totalCost / this.operationCount,
      currentCapacity: this.capacity,
      currentSize: this.size,
    };

    this.costHistory.push(costRecord);
  }

  /**
   * 배열의 용량을 2배로 확장합니다.
   */
  private resize(): void {
    const newCapacity = this.capacity * 2;
    const newArray = new Array(newCapacity);

    // 기존 요소들을 새 배열로 복사 (비용 발생!)
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }

    this.array = newArray;
    this.capacity = newCapacity;
  }

  /**
   * 특정 인덱스의 요소를 반환합니다.
   */
  get(index: number): T | undefined {
    if (index < 0 || index >= this.size) {
      throw new Error(`Index out of bounds: ${index}`);
    }
    return this.array[index];
  }

  /**
   * 현재 배열의 크기를 반환합니다.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * 현재 배열의 용량을 반환합니다.
   */
  getCapacity(): number {
    return this.capacity;
  }

  /**
   * 비용 기록을 반환합니다.
   */
  getCostHistory(): OperationCost[] {
    return this.costHistory;
  }

  /**
   * 비용 분석 결과를 테이블 형식으로 출력합니다.
   */
  printCostAnalysis(): void {
    console.log('\n=== 동적배열 비용 분석 ===\n');
    console.log('연산# | 추가비용 | 복사비용 | 총비용 | 누적비용 | 분할상환비용 | 용량 | 크기');
    console.log('-'.repeat(85));

    this.costHistory.forEach(record => {
      console.log(
        `${record.operationNumber.toString().padStart(5)} | ` +
        `${record.insertCost.toString().padStart(8)} | ` +
        `${record.copyCost.toString().padStart(8)} | ` +
        `${record.totalCost.toString().padStart(6)} | ` +
        `${record.cumulativeCost.toString().padStart(8)} | ` +
        `${record.amortizedCost.toFixed(2).padStart(12)} | ` +
        `${record.currentCapacity.toString().padStart(4)} | ` +
        `${record.currentSize.toString().padStart(4)}`
      );
    });

    console.log('\n분석 요약:');
    console.log(`- 총 연산 수: ${this.operationCount}`);
    console.log(`- 총 비용: ${this.totalCost}`);
    console.log(`- 평균 분할상환 비용: ${(this.totalCost / this.operationCount).toFixed(4)}`);
    console.log(`- 최종 배열 크기: ${this.size}`);
    console.log(`- 최종 배열 용량: ${this.capacity}`);
  }

  /**
   * 비용 데이터를 마크다운 테이블 형식으로 반환합니다.
   */
  generateMarkdownTable(): string {
    let markdown = '| 연산# | 추가비용 | 복사비용 | 총비용 | 누적비용 | 분할상환비용 | 용량 | 크기 |\n';
    markdown += '|-------|----------|----------|--------|----------|--------------|------|------|\n';

    this.costHistory.forEach(record => {
      markdown += `| ${record.operationNumber} | `;
      markdown += `${record.insertCost} | `;
      markdown += `${record.copyCost} | `;
      markdown += `${record.totalCost} | `;
      markdown += `${record.cumulativeCost} | `;
      markdown += `${record.amortizedCost.toFixed(2)} | `;
      markdown += `${record.currentCapacity} | `;
      markdown += `${record.currentSize} |\n`;
    });

    return markdown;
  }

  /**
   * Chart.js용 데이터를 JSON 형식으로 반환합니다.
   */
  getChartData(): string {
    const operationNumbers = this.costHistory.map(r => r.operationNumber);
    const totalCosts = this.costHistory.map(r => r.totalCost);
    const amortizedCosts = this.costHistory.map(r => r.amortizedCost);
    const copyCosts = this.costHistory.map(r => r.copyCost);

    return JSON.stringify({
      labels: operationNumbers,
      datasets: [
        {
          label: '실제 비용 (Actual Cost)',
          data: totalCosts,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          tension: 0.1
        },
        {
          label: '분할상환 비용 (Amortized Cost)',
          data: amortizedCosts,
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          tension: 0.1
        },
        {
          label: '복사 비용 (Copy Cost)',
          data: copyCosts,
          borderColor: 'rgb(255, 206, 86)',
          backgroundColor: 'rgba(255, 206, 86, 0.1)',
          tension: 0.1
        }
      ]
    }, null, 2);
  }
}

// ============================================
// 예제 실행 코드
// ============================================

function demonstrateAmortizedAnalysis() {
  console.log('동적배열 분할상환분석 데모\n');
  console.log('초기 용량 1로 시작하여 32개의 요소를 추가합니다.\n');

  const dynamicArray = new DynamicArray<number>(1);

  // 32개의 요소 추가
  for (let i = 1; i <= 32; i++) {
    dynamicArray.push(i);
  }

  // 비용 분석 출력
  dynamicArray.printCostAnalysis();

  // 핵심 관찰 사항 출력
  console.log('\n핵심 관찰 사항:');
  console.log('1. 대부분의 연산은 비용이 1입니다 (단순 추가).');
  console.log('2. 2의 거듭제곱 위치(2, 4, 8, 16, 32)에서 복사가 발생합니다.');
  console.log('3. 복사 비용은 현재 크기에 비례합니다 (1, 2, 4, 8, 16).');
  console.log('4. 분할상환 비용은 약 2~3 사이로 수렴합니다.');
  console.log('5. 따라서 평균적으로 O(1) 시간복잡도를 가집니다!');

  return dynamicArray;
}

// 예제 실행
if (require.main === module) {
  const array = demonstrateAmortizedAnalysis();

  // 마크다운 테이블 생성 (파일로 저장할 수 있음)
  const markdownTable = array.generateMarkdownTable();
  console.log('\n\n=== 마크다운 테이블 ===\n');
  console.log(markdownTable);

  // 차트 데이터 생성 (HTML 파일에서 사용할 수 있음)
  const chartData = array.getChartData();
  console.log('\n=== Chart.js 데이터 (JSON) ===\n');
  console.log(chartData);
}

export { DynamicArray, OperationCost, demonstrateAmortizedAnalysis };

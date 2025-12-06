/**
 * 분할상환 비용이 2를 초과하는 이유 분석
 */

function analyzeAmortizedCost() {
  console.log('=== 분할상환 비용 상세 분석 ===\n');

  let capacity = 1;
  let size = 0;
  let totalCost = 0;

  const data: Array<{
    n: number;
    insertCost: number;
    copyCost: number;
    totalOpCost: number;
    cumulativeCost: number;
    amortizedCost: number;
    theoretical: number;
  }> = [];

  for (let n = 1; n <= 32; n++) {
    const insertCost = 1;
    let copyCost = 0;

    if (size === capacity) {
      copyCost = size;
      capacity *= 2;
    }

    size++;
    const totalOpCost = insertCost + copyCost;
    totalCost += totalOpCost;

    const amortizedCost = totalCost / n;
    const theoretical = 2 - 1 / n;

    data.push({
      n,
      insertCost,
      copyCost,
      totalOpCost,
      cumulativeCost: totalCost,
      amortizedCost,
      theoretical,
    });
  }

  console.log('n  | 총비용 | 누적비용 | 실제 분할상환 | 이론(2-1/n) | 차이');
  console.log('---|--------|----------|---------------|-------------|------');

  data.forEach(d => {
    const diff = Math.abs(d.amortizedCost - d.theoretical);
    const exceeds = d.amortizedCost > 2 ? '⚠️' : '';
    console.log(
      `${d.n.toString().padStart(2)} | ` +
      `${d.totalOpCost.toString().padStart(6)} | ` +
      `${d.cumulativeCost.toString().padStart(8)} | ` +
      `${d.amortizedCost.toFixed(4).padStart(13)} ${exceeds} | ` +
      `${d.theoretical.toFixed(4).padStart(11)} | ` +
      `${diff.toFixed(4)}`
    );
  });

  console.log('\n=== 문제 발견 ===\n');

  const exceeding = data.filter(d => d.amortizedCost > 2);
  console.log(`분할상환 비용이 2를 초과하는 경우: ${exceeding.length}개`);
  exceeding.forEach(d => {
    console.log(`  - n=${d.n}: ${d.amortizedCost.toFixed(4)} (초과: ${(d.amortizedCost - 2).toFixed(4)})`);
  });

  console.log('\n=== 원인 분석 ===\n');

  // 복사가 발생한 시점 분석
  const copyOps = data.filter(d => d.copyCost > 0);
  console.log('복사 발생 시점과 그 직후의 분할상환 비용:\n');
  console.log('연산 | 복사개수 | 직후 분할상환 | 이론값');
  console.log('-----|----------|--------------|--------');

  copyOps.forEach(d => {
    console.log(
      `${d.n.toString().padStart(4)} | ` +
      `${d.copyCost.toString().padStart(8)} | ` +
      `${d.amortizedCost.toFixed(4).padStart(12)} | ` +
      `${d.theoretical.toFixed(4)}`
    );
  });

  console.log('\n=== 핵심 발견 ===\n');
  console.log('복사가 발생한 직후에는 분할상환 비용이 급증합니다!');
  console.log('특히 큰 복사(8개, 16개)가 발생한 직후에는 2를 초과합니다.\n');

  // 최대값 분석
  const maxAmortized = Math.max(...data.map(d => d.amortizedCost));
  const maxPoint = data.find(d => d.amortizedCost === maxAmortized);
  console.log(`최대 분할상환 비용: ${maxAmortized.toFixed(4)} (n=${maxPoint?.n})`);

  // 수렴 분석
  console.log('\n=== 수렴 패턴 ===\n');
  console.log('복사 직후 → 점진적 감소 → 다음 복사에서 다시 상승\n');

  const ranges = [
    { start: 1, end: 2, label: '1-2' },
    { start: 3, end: 4, label: '3-4' },
    { start: 5, end: 8, label: '5-8' },
    { start: 9, end: 16, label: '9-16' },
    { start: 17, end: 32, label: '17-32' },
  ];

  ranges.forEach(range => {
    const rangeData = data.slice(range.start - 1, range.end);
    const max = Math.max(...rangeData.map(d => d.amortizedCost));
    const min = Math.min(...rangeData.map(d => d.amortizedCost));
    console.log(`구간 ${range.label}: ${min.toFixed(2)} ~ ${max.toFixed(2)}`);
  });

  console.log('\n=== 결론 ===\n');
  console.log('❌ "분할상환 비용 = 2 - 1/n" 공식은 부정확합니다!');
  console.log('✓ 실제로는 복사 직후 일시적으로 2를 초과합니다.');
  console.log('✓ 하지만 n이 충분히 크면 점근적으로 2에 수렴합니다.');
  console.log('✓ 정확한 표현: "분할상환 비용은 최대 3 미만, 평균적으로 약 2"');
}

analyzeAmortizedCost();

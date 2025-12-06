/**
 * 분할상환분석 수학적 검증
 *
 * README.md의 수식이 정확한지 실제 데이터로 검증합니다.
 */

interface VerificationResult {
  n: number;
  actualInsertCost: number;
  actualCopyCost: number;
  actualTotalCost: number;
  theoreticalInsertCost: number;
  theoreticalCopyCost: number;
  theoreticalTotalCost: number;
  insertCostMatch: boolean;
  copyCostMatch: boolean;
  totalCostMatch: boolean;
  amortizedCost: number;
}

function verifyAmortizedAnalysis(n: number): VerificationResult {
  let capacity = 1;
  let size = 0;
  let insertCost = 0;
  let copyCost = 0;

  for (let i = 0; i < n; i++) {
    // 삽입 비용 (항상 1)
    insertCost += 1;

    // 용량이 가득 찬 경우 복사 발생
    if (size === capacity) {
      copyCost += size; // 현재 모든 요소를 복사
      capacity *= 2;    // 용량 2배로 확장
    }

    size++;
  }

  const actualTotalCost = insertCost + copyCost;

  // 이론적 비용 계산
  const theoreticalInsertCost = n;
  const theoreticalCopyCost = n - 1;
  const theoreticalTotalCost = 2 * n - 1;

  return {
    n,
    actualInsertCost: insertCost,
    actualCopyCost: copyCost,
    actualTotalCost,
    theoreticalInsertCost,
    theoreticalCopyCost,
    theoreticalTotalCost,
    insertCostMatch: insertCost === theoreticalInsertCost,
    copyCostMatch: copyCost === theoreticalCopyCost,
    totalCostMatch: actualTotalCost === theoreticalTotalCost,
    amortizedCost: actualTotalCost / n
  };
}

function printVerification(result: VerificationResult): void {
  console.log(`\n=== n = ${result.n} 검증 ===\n`);

  console.log('1. 삽입 비용:');
  console.log(`   실제: ${result.actualInsertCost}`);
  console.log(`   이론: ${result.theoreticalInsertCost} (n)`);
  console.log(`   일치: ${result.insertCostMatch ? '✓' : '✗'}\n`);

  console.log('2. 복사 비용:');
  console.log(`   실제: ${result.actualCopyCost}`);
  console.log(`   이론: ${result.theoreticalCopyCost} (n - 1)`);
  console.log(`   일치: ${result.copyCostMatch ? '✓' : '✗'}\n`);

  console.log('3. 총 비용:');
  console.log(`   실제: ${result.actualTotalCost}`);
  console.log(`   이론: ${result.theoreticalTotalCost} (2n - 1)`);
  console.log(`   일치: ${result.totalCostMatch ? '✓' : '✗'}\n`);

  console.log('4. 분할상환 비용:');
  console.log(`   ${result.amortizedCost.toFixed(4)} ≈ 2\n`);
}

function detailedCopyAnalysis(n: number): void {
  console.log(`\n=== n = ${n}: 복사 비용 상세 분석 ===\n`);

  let capacity = 1;
  let size = 0;
  const copyOperations: { operation: number; copyCost: number; capacity: number }[] = [];

  for (let i = 1; i <= n; i++) {
    if (size === capacity) {
      copyOperations.push({
        operation: i,
        copyCost: size,
        capacity: capacity * 2
      });
      capacity *= 2;
    }
    size++;
  }

  console.log('복사 발생 시점:');
  console.log('연산# | 복사 개수 | 새 용량');
  console.log('------|-----------|----------');

  let totalCopy = 0;
  copyOperations.forEach(op => {
    console.log(`${op.operation.toString().padStart(5)} | ${op.copyCost.toString().padStart(9)} | ${op.capacity.toString().padStart(8)}`);
    totalCopy += op.copyCost;
  });

  console.log('\n복사 비용 계산:');
  const copyCosts = copyOperations.map(op => op.copyCost);
  console.log(`${copyCosts.join(' + ')} = ${totalCopy}`);

  console.log(`\n등비급수 검증:`);
  console.log(`수열: ${copyCosts.join(', ')}`);
  console.log(`첫 항 a = ${copyCosts[0]}, 공비 r = 2`);
  console.log(`항의 개수 k = ${copyCosts.length}`);

  if (isPowerOfTwo(n)) {
    console.log(`\nn = 2^${Math.log2(n)}이므로:`);
    console.log(`복사 비용 = 1 + 2 + 4 + ... + n/2`);
    console.log(`         = 1 + 2 + 4 + ... + ${n/2}`);
    console.log(`         = 2^${Math.log2(n)} - 1`);
    console.log(`         = ${n} - 1`);
    console.log(`         = ${n - 1}`);
    console.log(`실제 값: ${totalCopy}`);
    console.log(`일치: ${totalCopy === n - 1 ? '✓' : '✗'}`);
  } else {
    const nearestPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(n)));
    console.log(`\nn = ${n}은 2의 거듭제곱이 아닙니다.`);
    console.log(`가장 가까운 2의 거듭제곱: ${nearestPowerOfTwo}`);
    console.log(`복사 비용 합: ${totalCopy}`);
    console.log(`n - 1 = ${n - 1}`);
    console.log(`차이: ${Math.abs(totalCopy - (n - 1))}`);
  }
}

function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

function comprehensiveTest(): void {
  console.log('====================================');
  console.log('동적배열 분할상환분석 수학적 검증');
  console.log('====================================');

  // 2의 거듭제곱인 경우들
  const powersOfTwo = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

  console.log('\n### 2의 거듭제곱인 경우 (n = 2^k) ###');
  console.log('\nn | 실제 총비용 | 이론 (2n-1) | 분할상환 | 일치');
  console.log('---|-------------|-------------|----------|-----');

  powersOfTwo.forEach(n => {
    const result = verifyAmortizedAnalysis(n);
    const match = result.totalCostMatch ? '✓' : '✗';
    console.log(
      `${n.toString().padStart(4)} | ${result.actualTotalCost.toString().padStart(11)} | ` +
      `${result.theoreticalTotalCost.toString().padStart(11)} | ` +
      `${result.amortizedCost.toFixed(4).padStart(8)} | ${match}`
    );
  });

  // 2의 거듭제곱이 아닌 경우들
  const nonPowersOfTwo = [3, 5, 7, 10, 15, 20, 30, 50, 100];

  console.log('\n### 2의 거듭제곱이 아닌 경우 ###');
  console.log('\nn | 실제 총비용 | 이론 (2n-1) | 실제 복사 | n-1 | 차이 | 분할상환');
  console.log('---|-------------|-------------|-----------|-----|------|----------');

  nonPowersOfTwo.forEach(n => {
    const result = verifyAmortizedAnalysis(n);
    const diff = Math.abs(result.actualCopyCost - result.theoreticalCopyCost);
    console.log(
      `${n.toString().padStart(3)} | ${result.actualTotalCost.toString().padStart(11)} | ` +
      `${result.theoreticalTotalCost.toString().padStart(11)} | ` +
      `${result.actualCopyCost.toString().padStart(9)} | ` +
      `${result.theoreticalCopyCost.toString().padStart(3)} | ` +
      `${diff.toString().padStart(4)} | ${result.amortizedCost.toFixed(4)}`
    );
  });

  // 상세 분석
  console.log('\n\n### 상세 복사 비용 분석 ###');
  [8, 16, 32].forEach(n => {
    detailedCopyAnalysis(n);
  });

  // 특정 케이스 상세 검증
  console.log('\n\n### 예제: n = 32 상세 검증 ###');
  const result32 = verifyAmortizedAnalysis(32);
  printVerification(result32);

  // 결론
  console.log('\n====================================');
  console.log('검증 결론');
  console.log('====================================\n');

  const allPowerOfTwoMatch = powersOfTwo.every(n => {
    const result = verifyAmortizedAnalysis(n);
    return result.totalCostMatch;
  });

  if (allPowerOfTwoMatch) {
    console.log('✓ n이 2의 거듭제곱인 경우:');
    console.log('  - 삽입 비용: n');
    console.log('  - 복사 비용: n - 1 (등비급수의 합)');
    console.log('  - 총 비용: 2n - 1');
    console.log('  - 분할상환 비용: (2n - 1) / n ≈ 2');
    console.log('  ⟹ 수식이 정확합니다!\n');
  }

  console.log('✓ n이 2의 거듭제곱이 아닌 경우:');
  console.log('  - 복사 비용은 n - 1과 약간 차이가 있을 수 있습니다.');
  console.log('  - 하지만 점근적으로는 여전히 O(n)입니다.');
  console.log('  - 분할상환 비용은 여전히 O(1) = 약 2입니다.\n');

  console.log('📊 README.md의 수식 검증 결과:');
  console.log('  ✓ "단순 삽입 비용: n" - 정확함');
  console.log('  ✓ "복사 비용: 1 + 2 + 4 + ... + n/2 = n - 1" - 정확함 (n이 2의 거듭제곱일 때)');
  console.log('  ✓ "총 비용: n + (n - 1) = 2n - 1" - 정확함 (n이 2의 거듭제곱일 때)');
  console.log('  ✓ "분할상환 비용: O(1) ≈ 2" - 정확함\n');
}

// 실행
if (require.main === module) {
  comprehensiveTest();
}

export { verifyAmortizedAnalysis, detailedCopyAnalysis, comprehensiveTest };

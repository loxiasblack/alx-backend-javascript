export default function guardrail(mathFunction) {
    const queue = [];
    let value;
    const str = 'Guardrail was processed';
    try {
      value = mathFunction();
      queue.push(value, str);
    } catch (e) {
      queue.push(`Error: ${e.message}`, str);
    }
    return queue;
  }

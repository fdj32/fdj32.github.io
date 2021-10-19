package a;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class OddEven {

	private static final Lock ODD_EVEN_LOCK = new ReentrantLock();
	private static final Condition ODD_COND = ODD_EVEN_LOCK.newCondition();
	private static final Condition EVEN_COND = ODD_EVEN_LOCK.newCondition();

	private static volatile int counter = 0;
	private static final int MAX = 99;

	static class OddAdder implements Runnable {

		@Override
		public void run() {
			while (counter < MAX) {
				ODD_EVEN_LOCK.lock();
				System.out.println("OddAdder lock");
				try {
					while (counter % 2 == 0)
						ODD_COND.await();
					counter++;
					System.out.println("OddAdder counter++=" + counter);
					EVEN_COND.signal();
				} catch (InterruptedException e) {
					e.printStackTrace();
				} finally {
					ODD_EVEN_LOCK.unlock();
				}
				System.out.println("OddAdder unlock");
			}
		}
	}

	static class EvenAdder implements Runnable {

		@Override
		public void run() {
			while (counter < MAX) {
				ODD_EVEN_LOCK.lock();
				System.out.println("EvenAdder lock");
				try {
					while (counter % 2 == 1)
						EVEN_COND.await();
					counter++;
					System.out.println("EvenAdder counter++=" + counter);
					ODD_COND.signal();
				} catch (InterruptedException e) {
					e.printStackTrace();
				} finally {
					ODD_EVEN_LOCK.unlock();
				}
				System.out.println("EvenAdder unlock");
			}
		}
	}

	public static void main(String[] args) {
		ExecutorService es = Executors.newFixedThreadPool(2);
		es.submit(new OddAdder());
		es.submit(new EvenAdder());
		es.shutdown();
	}

}

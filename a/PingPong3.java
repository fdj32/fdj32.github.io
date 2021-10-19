package a;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class PingPong3 {

	private static final Lock LOCK = new ReentrantLock();
	private static final Condition COND1 = LOCK.newCondition();
	private static final Condition COND2 = LOCK.newCondition();

	private static final int ROUND = 99999;

	public static void main(String[] args) {
		new Thread(new ThreadPing()).start();
		new Thread(new ThreadPong()).start();
	}

	static class ThreadPing implements Runnable {

		@Override
		public void run() {
			for (int i = 0; i < ROUND; i++) {
				LOCK.lock();
				System.out.println("Ping " + i);
				COND2.signal();
				try {
					COND1.await();
				} catch (Exception e) {
					e.printStackTrace();
				}
				LOCK.unlock();
			}
			LOCK.lock();
			COND2.signal();
			LOCK.unlock();
		}
	}

	static class ThreadPong implements Runnable {

		@Override
		public void run() {
			for (int i = 0; i < ROUND; i++) {
				LOCK.lock();
				System.out.println("Pong " + i);
				COND1.signal();
				try {
					COND2.await();
				} catch (Exception e) {
					e.printStackTrace();
				}
				LOCK.unlock();
			}
			LOCK.lock();
			COND1.signal();
			LOCK.unlock();
		}
	}

}

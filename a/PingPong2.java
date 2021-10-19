package a;

public class PingPong2 {

	private static final Object LOCK1 = new Object();
	private static final Object LOCK2 = new Object();

	private static final int ROUND = 99999;

	public static void main(String[] args) {
		new Thread(new ThreadPing()).start();
		new Thread(new ThreadPong()).start();
	}

	static class ThreadPing implements Runnable {

		@Override
		public void run() {
			for (int i = 0; i < ROUND; i++) {
				System.out.println("Ping " + i);
				synchronized (LOCK2) {
					synchronized (LOCK1) {
						LOCK1.notify();
					}
					try {
						LOCK2.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
			synchronized (LOCK1) {
				LOCK1.notify();
			}
//			synchronized (LOCK2) {
//				LOCK2.notify();
//			}
		}
	}

	static class ThreadPong implements Runnable {

		@Override
		public void run() {
			for (int i = 0; i < ROUND; i++) {
				System.out.println("Pong " + i);
				synchronized (LOCK1) {
					synchronized (LOCK2) {
						LOCK2.notify();
					}
					try {
						LOCK1.wait();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
//			synchronized (LOCK1) {
//				LOCK1.notify();
//			}
			synchronized (LOCK2) {
				LOCK2.notify();
			}
		}
	}
}

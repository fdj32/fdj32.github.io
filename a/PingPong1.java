package a;

public class PingPong1 {

	private static final Object LOCK1 = new Object();
	private static final Object LOCK2 = new Object();
	
	private static final int ROUND = 9999;

	public static void main(String[] args) {
		new Thread(new Runnable() {
			public void run() {
				for (int i = 0; i < ROUND; i++) {
					synchronized (LOCK1) {
						try {
							LOCK1.wait();
							System.out.println("Ping " + i);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			}
		}).start();
		new Thread(new Runnable() {
			public void run() {
				for (int i = 0; i < ROUND; i++) {
					synchronized (LOCK2) {
						try {
							LOCK2.wait();
							System.out.println("Pong " + i);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			}
		}).start();
		new Thread(new Runnable() {
			public void run() {
				for (int i = 0; i < ROUND; i++) {
					synchronized (LOCK1) {
						LOCK1.notify();
					}
					try {
						Thread.sleep(0, 1);
					} catch (Exception e) {
						e.printStackTrace();
					}
					synchronized (LOCK2) {
						LOCK2.notify();
					}
				}

			}
		}).start();
	}

}

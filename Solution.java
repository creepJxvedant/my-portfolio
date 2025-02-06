class Solution {
    public int tupleSameProduct(int[] nums) {

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                int mult = nums[i] * nums[j];
                map.put(mult, map.getOrDefault(mult, 0) + 1);
            }
        }

        int ans = 0;

        for (int key : map.keySet()) {
            int val = map.get(key);
            if (val > 1) {
                ans += val * (val - 1) / 2 * 8;
            }

            return ans;

        }
    }
}
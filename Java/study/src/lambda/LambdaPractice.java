package lambda;

import java.util.Arrays;

public class LambdaPractice{
    public static void main(String[] args){
        int[] num={2, 23, 4, 4, 22, 34, 45, 11, 33};
        System.out.println("最小数："+Arrays.stream(num).min());
        System.out.println("最小数："+Arrays.stream(num).min().getAsInt());
        System.out.println("数组去重乘2求和："+
            Arrays.stream(num).distinct().map((i)->i*2).sum());
    }
}
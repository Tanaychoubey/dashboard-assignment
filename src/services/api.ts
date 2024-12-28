import { Order, Feedback, ActivityData } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

class ApiService {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async fetch<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);

            if (!response.ok) {
                throw new ApiError(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`API Error: ${endpoint}`, error);
            throw error;
        }
    }

    async fetchActivity(): Promise<ActivityData[]> {
        return this.fetch<ActivityData[]>('/activity');
    }

    async fetchOrders(): Promise<Order[]> {
        return this.fetch<Order[]>('/orders');
    }

    async fetchFeedback(): Promise<Feedback[]> {
        return this.fetch<Feedback[]>('/feedback');
    }

    async fetchDashboardData(): Promise<{
        activityData: ActivityData[];
        orders: Order[];
        feedback: Feedback[];
    }> {
        return this.fetch('/dashboard');
    }

    async fetchStats(): Promise<{
        totalUsers: number;
        totalCategories: number;
        totalOrders: number;
        totalRevenue: number;
    }> {
        return this.fetch('/stats');
    }
}

export const api = new ApiService(API_BASE_URL);
export default api;

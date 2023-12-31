<?php

namespace App\Repository\Account;

use App\Models\Users;
use App\Repository\AccountInterface;
use Spatie\Permission\Traits\HasRoles;

class Account implements AccountInterface
{
    protected $user;
    use HasRoles;

    public function __construct(Users $user)
    {
        $this->account = $user;

    }

    public function getById($memberId)
    {
        return $this->account->where('id', $memberId)->first();
    }

    public function countAllTodayLoggedInUsers()
    {
        return $this->account->whereDate('last_login_date', '=', date('Y-m-d'))->count();
    }

    public function countAllUsers()
    {
        return $this->account->get()->count();
    }

    public function countAllTodaysRegisteredUsers()
    {
        return $this->account->whereDate('created_at', '=', date('Y-m-d'))->count();
    }

    public function countActiveUsers()
    {
        return $this->account->where('is_login', '=', '1')->whereDate('created_at', '=', date('Y-m-d'))->count();
    }
    public function countInActiveUsers()
    {
        return $this->account->where('is_login', '=', '2')->whereDate('created_at', '=', date('Y-m-d'))->count();
    }

    public function getUserByUsername($username)
    {
        return $this->account->where('username', $username)->first();
    }
    public function getUserByEmail($email)
    {
        return $this->account->where('email', $email)->first();
    }
    public function doesTheOtpExists($email, $otp)
    {
        return $this->account->where('email', $email)->where('verification_code', $otp)->exists();
    }
    public function getActiveAccounts()
    {
        return $this->account->where('status', '1')->get();
    }
    /**
     * Get's all posts.
     *
     * @return mixed
     */
    public function getAll()
    {
        return $this->account->latest();
    }

    /**
     *
     *
     * @return mixed
     */
    public function create(array $data)
    {
        return $this->account->create($data);
    }
    /**
     * Updates a post.
     *
     * @param int
     * @param array
     */

    public function update($id, array $data)
    {
        return $this->account->find($id)->update($data);
    }
    /**
     * Deletes a post.
     *
     * @param int
     */
    public function delete($id)
    {
        return $this->account->find($id)->delete();
    }

    public function getUsersNotification($user, $limit = 10, $offset = 0)
    {
        return $user->unreadNotifications()->union($user->readNotifications())->limit($limit)->offset($offset)->get();
    }

    public function markNotificationsToRead($notifications)
    {
        return $notifications->markAsRead();
    }
    public function countUnreadNotifications($user)
    {
        return $user->unreadNotifications()->count();
    }
}

/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : user web controller.
 */

const createUser = async (req, res) => {
    res.render('addUser');
}

const getUsers = async (req, res) => {
    res.render('getUsers');
}

const getUser = async (req, res) => {
    res.render('getUser');
}

module.exports = { createUser, getUsers, getUser }
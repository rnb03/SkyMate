package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{"message": "Users API is Up!"})
}

func GetUser(c *gin.Context) {
	userId := c.Param("id")
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "Getting user details",
		"userId":  userId,
	})
}

func CreateUser(c *gin.Context) {
	// This will be expanded later to handle actual user data
	c.IndentedJSON(http.StatusCreated, gin.H{
		"message": "User created successfully",
	})
}

func UpdateUser(c *gin.Context) {
	userId := c.Param("id")
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "Updating user details",
		"userId":  userId,
	})
}

func DeleteUser(c *gin.Context) {
	userId := c.Param("id")
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "Deleting user",
		"userId":  userId,
	})
}

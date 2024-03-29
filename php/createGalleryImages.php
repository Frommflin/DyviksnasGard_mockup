<?php
    include "dbConnect.php";
    include "functions.php";

    $album = $_POST["toAlbum"];

    try{
        foreach($_FILES["galleryUploads"]["name"] as $key=>$val){
            if($_FILES["galleryUploads"]["name"] != ""){
                $fileName = set_image_name("galleryUploads", $_FILES["galleryUploads"]["name"][$key]);
                $filePath = "../images/galleryUploads/" . $fileName;
                move_uploaded_file($_FILES["galleryUploads"]["tmp_name"][$key], $filePath);

                $query="INSERT INTO galleries(img,album) values (:IMG,:ALBUM);";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(":IMG",$fileName);
                $stmt->bindParam(":ALBUM",$album);
                $stmt->execute();

                header ("Content-Type:text/xml; charset=utf-8");  
                echo "<created status='OK'/>";
            }
        }
    } 
    catch (PDOException $e) {
        err("Error!: ".$e->getMessage()."<br/>");
        die();
    }
?>

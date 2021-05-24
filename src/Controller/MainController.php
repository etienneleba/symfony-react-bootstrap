<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'main', defaults:["reactRouting" => null])]
    public function index(): Response
    {
        return $this->render('main/index.html.twig');
    }

    #[Route('/api/releases', name: 'releases')]
    public function releases(): Response
    {
        return $this->json([
            [
                "version" => "1.0.0"
            ],
            [
                "version" => "2.0.0"
            ]
        ]);
    }
}

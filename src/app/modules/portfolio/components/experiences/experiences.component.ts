import { Component, signal } from '@angular/core';

// Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Front-End JR',
        p: 'Cacau Show | Dez 2023 - Presente',
      },
      text: '<p>Desenvolvimento de aplicações web utilizando framework Angular e manutenção de prjetos legados com Vue.js e React.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-End',
        p: 'Cacau Show | Set 2022 - Dez 2023',
      },
      text: '<p>uxiliar no desenvolvimento front-end de aplicações da empresa e manutenção do mesmo, sendo aplicações de serviços internos, programa de fidelidade, entre outros.</p>',
    },
    {
      summary: {
        strong: 'Assistente de Suporte',
        p: 'Cacau Show | Fev 2022 - Set 2022',
      },
      text: '<p>Atendimento de chamados de categoria N1 e N2 utilizando a ferramenta Sysaid, manutenção de equipamentos, servidor de impressão WSUS e WDS, atuação com equipe de infraestrutura para solução de problemas N3.</p>',
    },
    {
      summary: {
        strong: 'Auxiliar de produção',
        p: 'Cacau Show | Jun 2021 - Fev 2022',
      },
      text: '<p>Organização e limpeza da linha de produção mantendo as Boas praticas de Fabricação (BPF), mantendo o mesmo abastecido com a matéria prima e embalagem. Montagem e desmontagem de máquinas para limpeza e setup(troca de produto).</p>',
    },
  ]);
}

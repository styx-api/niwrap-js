// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ALIGN_EPI_ANAT_METADATA: Metadata = {
    id: "f8698b45584333a566a4ac7a702d9045fad24911.boutiques",
    name: "align_epi_anat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface AlignEpiAnatParameters {
    "__STYXTYPE__": "align_epi_anat";
    "epi": InputPathType;
    "anat": InputPathType;
    "epi_base": string;
    "anat2epi": boolean;
    "epi2anat": boolean;
    "suffix"?: string | null | undefined;
    "AddEdge": boolean;
    "big_move": boolean;
    "giant_move": boolean;
    "ginormous_move": boolean;
    "keep_rm_files": boolean;
    "prep_only": boolean;
    "ana_has_skull"?: "yes" | "no" | null | undefined;
    "epi_strip"?: "3dSkullStrip" | "3dAutomask" | "None" | null | undefined;
    "volreg_method"?: "3dvolreg" | "3dWarpDrive" | "3dAllineate" | null | undefined;
    "ex_mode"?: "quiet" | "echo" | "dry_run" | "script" | null | undefined;
    "overwrite": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "align_epi_anat": align_epi_anat_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "align_epi_anat": align_epi_anat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `align_epi_anat(...)`.
 *
 * @interface
 */
interface AlignEpiAnatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * A version of the anatomy that is aligned to the EPI
     */
    anat_aligned: OutputPathType;
    /**
     * A version of the EPI dataset aligned to the Anatomy
     */
    epi_aligned: OutputPathType;
}


function align_epi_anat_params(
    epi: InputPathType,
    anat: InputPathType,
    epi_base: string,
    anat2epi: boolean = false,
    epi2anat: boolean = false,
    suffix: string | null = null,
    add_edge: boolean = false,
    big_move: boolean = false,
    giant_move: boolean = false,
    ginormous_move: boolean = false,
    keep_rm_files: boolean = false,
    prep_only: boolean = false,
    ana_has_skull: "yes" | "no" | null = null,
    epi_strip: "3dSkullStrip" | "3dAutomask" | "None" | null = null,
    volreg_method: "3dvolreg" | "3dWarpDrive" | "3dAllineate" | null = null,
    ex_mode: "quiet" | "echo" | "dry_run" | "script" | null = null,
    overwrite: boolean = false,
): AlignEpiAnatParameters {
    /**
     * Build parameters.
    
     * @param epi EPI dataset to align or to which to align
     * @param anat Anatomical dataset to align or to which to align
     * @param epi_base Base sub-brick to use for alignment (0/mean/median/max/subbrick#)
     * @param anat2epi Align anatomical to EPI dataset (default)
     * @param epi2anat Align EPI to anatomical dataset
     * @param suffix Append suffix to the original anat/epi dataset to use in the resulting dataset names
     * @param add_edge Run @AddEdge script to create composite edge images
     * @param big_move Large displacement is needed to align the two volumes
     * @param giant_move Even larger movement required, uses cmass, two passes and very large angles and shifts
     * @param ginormous_move Adds align_centers to giant_move
     * @param keep_rm_files Don't delete any of the temporary files created
     * @param prep_only Do preprocessing steps only without alignment
     * @param ana_has_skull Do not skullstrip anat dataset
     * @param epi_strip Method to remove skull for EPI data
     * @param volreg_method Time series volume registration method
     * @param ex_mode Command execution mode
     * @param overwrite Overwrite existing files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "align_epi_anat" as const,
        "epi": epi,
        "anat": anat,
        "epi_base": epi_base,
        "anat2epi": anat2epi,
        "epi2anat": epi2anat,
        "AddEdge": add_edge,
        "big_move": big_move,
        "giant_move": giant_move,
        "ginormous_move": ginormous_move,
        "keep_rm_files": keep_rm_files,
        "prep_only": prep_only,
        "overwrite": overwrite,
    };
    if (suffix !== null) {
        params["suffix"] = suffix;
    }
    if (ana_has_skull !== null) {
        params["ana_has_skull"] = ana_has_skull;
    }
    if (epi_strip !== null) {
        params["epi_strip"] = epi_strip;
    }
    if (volreg_method !== null) {
        params["volreg_method"] = volreg_method;
    }
    if (ex_mode !== null) {
        params["ex_mode"] = ex_mode;
    }
    return params;
}


function align_epi_anat_cargs(
    params: AlignEpiAnatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("align_epi_anat.py");
    cargs.push(
        "-epi",
        execution.inputFile((params["epi"] ?? null))
    );
    cargs.push(
        "-anat",
        execution.inputFile((params["anat"] ?? null))
    );
    cargs.push(
        "-epi_base",
        (params["epi_base"] ?? null)
    );
    if ((params["anat2epi"] ?? null)) {
        cargs.push("-anat2epi");
    }
    if ((params["epi2anat"] ?? null)) {
        cargs.push("-epi2anat");
    }
    if ((params["suffix"] ?? null) !== null) {
        cargs.push(
            "-suffix",
            (params["suffix"] ?? null)
        );
    }
    if ((params["AddEdge"] ?? null)) {
        cargs.push("-AddEdge");
    }
    if ((params["big_move"] ?? null)) {
        cargs.push("-big_move");
    }
    if ((params["giant_move"] ?? null)) {
        cargs.push("-giant_move");
    }
    if ((params["ginormous_move"] ?? null)) {
        cargs.push("-ginormous_move");
    }
    if ((params["keep_rm_files"] ?? null)) {
        cargs.push("-keep_rm_files");
    }
    if ((params["prep_only"] ?? null)) {
        cargs.push("-prep_only");
    }
    if ((params["ana_has_skull"] ?? null) !== null) {
        cargs.push(
            "-anat_has_skull",
            (params["ana_has_skull"] ?? null)
        );
    }
    if ((params["epi_strip"] ?? null) !== null) {
        cargs.push(
            "-epi_strip",
            (params["epi_strip"] ?? null)
        );
    }
    if ((params["volreg_method"] ?? null) !== null) {
        cargs.push(
            "-volreg_method",
            (params["volreg_method"] ?? null)
        );
    }
    if ((params["ex_mode"] ?? null) !== null) {
        cargs.push(
            "-ex_mode",
            (params["ex_mode"] ?? null)
        );
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    return cargs;
}


function align_epi_anat_outputs(
    params: AlignEpiAnatParameters,
    execution: Execution,
): AlignEpiAnatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AlignEpiAnatOutputs = {
        root: execution.outputFile("."),
        anat_aligned: execution.outputFile([path.basename((params["anat"] ?? null)), "+orig"].join('')),
        epi_aligned: execution.outputFile([path.basename((params["epi"] ?? null)), "+orig"].join('')),
    };
    return ret;
}


function align_epi_anat_execute(
    params: AlignEpiAnatParameters,
    execution: Execution,
): AlignEpiAnatOutputs {
    /**
     * Align EPI to anatomical datasets or vice versa.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AlignEpiAnatOutputs`).
     */
    params = execution.params(params)
    const cargs = align_epi_anat_cargs(params, execution)
    const ret = align_epi_anat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function align_epi_anat(
    epi: InputPathType,
    anat: InputPathType,
    epi_base: string,
    anat2epi: boolean = false,
    epi2anat: boolean = false,
    suffix: string | null = null,
    add_edge: boolean = false,
    big_move: boolean = false,
    giant_move: boolean = false,
    ginormous_move: boolean = false,
    keep_rm_files: boolean = false,
    prep_only: boolean = false,
    ana_has_skull: "yes" | "no" | null = null,
    epi_strip: "3dSkullStrip" | "3dAutomask" | "None" | null = null,
    volreg_method: "3dvolreg" | "3dWarpDrive" | "3dAllineate" | null = null,
    ex_mode: "quiet" | "echo" | "dry_run" | "script" | null = null,
    overwrite: boolean = false,
    runner: Runner | null = null,
): AlignEpiAnatOutputs {
    /**
     * Align EPI to anatomical datasets or vice versa.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param epi EPI dataset to align or to which to align
     * @param anat Anatomical dataset to align or to which to align
     * @param epi_base Base sub-brick to use for alignment (0/mean/median/max/subbrick#)
     * @param anat2epi Align anatomical to EPI dataset (default)
     * @param epi2anat Align EPI to anatomical dataset
     * @param suffix Append suffix to the original anat/epi dataset to use in the resulting dataset names
     * @param add_edge Run @AddEdge script to create composite edge images
     * @param big_move Large displacement is needed to align the two volumes
     * @param giant_move Even larger movement required, uses cmass, two passes and very large angles and shifts
     * @param ginormous_move Adds align_centers to giant_move
     * @param keep_rm_files Don't delete any of the temporary files created
     * @param prep_only Do preprocessing steps only without alignment
     * @param ana_has_skull Do not skullstrip anat dataset
     * @param epi_strip Method to remove skull for EPI data
     * @param volreg_method Time series volume registration method
     * @param ex_mode Command execution mode
     * @param overwrite Overwrite existing files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AlignEpiAnatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ALIGN_EPI_ANAT_METADATA);
    const params = align_epi_anat_params(epi, anat, epi_base, anat2epi, epi2anat, suffix, add_edge, big_move, giant_move, ginormous_move, keep_rm_files, prep_only, ana_has_skull, epi_strip, volreg_method, ex_mode, overwrite)
    return align_epi_anat_execute(params, execution);
}


export {
      ALIGN_EPI_ANAT_METADATA,
      AlignEpiAnatOutputs,
      AlignEpiAnatParameters,
      align_epi_anat,
      align_epi_anat_params,
};

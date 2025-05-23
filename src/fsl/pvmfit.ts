// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PVMFIT_METADATA: Metadata = {
    id: "2f5feeff275440050d46f82516af1c525bc61659.boutiques",
    name: "pvmfit",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface PvmfitParameters {
    "__STYXTYPE__": "pvmfit";
    "data_file": InputPathType;
    "mask_file": InputPathType;
    "bvec_file": InputPathType;
    "bval_file": InputPathType;
    "output_basename"?: string | null | undefined;
    "number_of_fibres"?: number | null | undefined;
    "model_type"?: number | null | undefined;
    "fit_all_models": boolean;
    "constrained_nonlinear": boolean;
    "constrained_nonlinear_f": boolean;
    "grid_search": boolean;
    "include_noise_floor": boolean;
    "save_bic": boolean;
    "verbose": boolean;
    "help": boolean;
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
        "pvmfit": pvmfit_cargs,
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
        "pvmfit": pvmfit_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `pvmfit(...)`.
 *
 * @interface
 */
interface PvmfitOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main output file
     */
    output_file: OutputPathType | null;
    /**
     * Optional: Saved BIC (Bayesian Information Criterion) for certain models
     */
    bic_file: OutputPathType | null;
}


function pvmfit_params(
    data_file: InputPathType,
    mask_file: InputPathType,
    bvec_file: InputPathType,
    bval_file: InputPathType,
    output_basename: string | null = "pvm",
    number_of_fibres: number | null = 1,
    model_type: number | null = null,
    fit_all_models: boolean = false,
    constrained_nonlinear: boolean = false,
    constrained_nonlinear_f: boolean = false,
    grid_search: boolean = false,
    include_noise_floor: boolean = false,
    save_bic: boolean = false,
    verbose: boolean = false,
    help: boolean = false,
): PvmfitParameters {
    /**
     * Build parameters.
    
     * @param data_file Data file
     * @param mask_file Mask file
     * @param bvec_file B vectors file
     * @param bval_file B values file
     * @param output_basename Output basename - default='pvm'
     * @param number_of_fibres Number of fibres to fit - default=1
     * @param model_type Model type: 1 for Ball-Sticks (single-shell), 2 for Ball-Sticks (multi-shells), 4 for Ball-Binghams
     * @param fit_all_models Fit all models from 1 up to N fibres and choose the best using BIC
     * @param constrained_nonlinear Model1: Apply constrained nonlinear optimization on the diffusivity, volume fractions and their sum
     * @param constrained_nonlinear_f Model1: Apply constrained nonlinear optimization on the diffusivity, volume fractions and their sum. Return n fanning angle estimates, using the Hessian of the cost function
     * @param grid_search Use grid search (on the fanning eigenvalues). Default=off
     * @param include_noise_floor Include noise floor parameter in the model
     * @param save_bic Save BIC for certain models
     * @param verbose Switch on diagnostic messages
     * @param help Display help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "pvmfit" as const,
        "data_file": data_file,
        "mask_file": mask_file,
        "bvec_file": bvec_file,
        "bval_file": bval_file,
        "fit_all_models": fit_all_models,
        "constrained_nonlinear": constrained_nonlinear,
        "constrained_nonlinear_f": constrained_nonlinear_f,
        "grid_search": grid_search,
        "include_noise_floor": include_noise_floor,
        "save_bic": save_bic,
        "verbose": verbose,
        "help": help,
    };
    if (output_basename !== null) {
        params["output_basename"] = output_basename;
    }
    if (number_of_fibres !== null) {
        params["number_of_fibres"] = number_of_fibres;
    }
    if (model_type !== null) {
        params["model_type"] = model_type;
    }
    return params;
}


function pvmfit_cargs(
    params: PvmfitParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("pvmfit");
    cargs.push(
        "-k",
        execution.inputFile((params["data_file"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["mask_file"] ?? null))
    );
    cargs.push(
        "-r",
        execution.inputFile((params["bvec_file"] ?? null))
    );
    cargs.push(
        "-b",
        execution.inputFile((params["bval_file"] ?? null))
    );
    if ((params["output_basename"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_basename"] ?? null)
        );
    }
    if ((params["number_of_fibres"] ?? null) !== null) {
        cargs.push(
            "-n",
            String((params["number_of_fibres"] ?? null))
        );
    }
    if ((params["model_type"] ?? null) !== null) {
        cargs.push(
            "--model",
            String((params["model_type"] ?? null))
        );
    }
    if ((params["fit_all_models"] ?? null)) {
        cargs.push("--all");
    }
    if ((params["constrained_nonlinear"] ?? null)) {
        cargs.push("--cnonlinear");
    }
    if ((params["constrained_nonlinear_f"] ?? null)) {
        cargs.push("--cnonlinear_F");
    }
    if ((params["grid_search"] ?? null)) {
        cargs.push("--gridsearch");
    }
    if ((params["include_noise_floor"] ?? null)) {
        cargs.push("--f0");
    }
    if ((params["save_bic"] ?? null)) {
        cargs.push("--BIC");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-V");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function pvmfit_outputs(
    params: PvmfitParameters,
    execution: Execution,
): PvmfitOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PvmfitOutputs = {
        root: execution.outputFile("."),
        output_file: ((params["output_basename"] ?? null) !== null) ? execution.outputFile([(params["output_basename"] ?? null), ".nii.gz"].join('')) : null,
        bic_file: ((params["output_basename"] ?? null) !== null) ? execution.outputFile([(params["output_basename"] ?? null), "_BIC.nii.gz"].join('')) : null,
    };
    return ret;
}


function pvmfit_execute(
    params: PvmfitParameters,
    execution: Execution,
): PvmfitOutputs {
    /**
     * Fits diffusion models to multishell DWI data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PvmfitOutputs`).
     */
    params = execution.params(params)
    const cargs = pvmfit_cargs(params, execution)
    const ret = pvmfit_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function pvmfit(
    data_file: InputPathType,
    mask_file: InputPathType,
    bvec_file: InputPathType,
    bval_file: InputPathType,
    output_basename: string | null = "pvm",
    number_of_fibres: number | null = 1,
    model_type: number | null = null,
    fit_all_models: boolean = false,
    constrained_nonlinear: boolean = false,
    constrained_nonlinear_f: boolean = false,
    grid_search: boolean = false,
    include_noise_floor: boolean = false,
    save_bic: boolean = false,
    verbose: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): PvmfitOutputs {
    /**
     * Fits diffusion models to multishell DWI data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param data_file Data file
     * @param mask_file Mask file
     * @param bvec_file B vectors file
     * @param bval_file B values file
     * @param output_basename Output basename - default='pvm'
     * @param number_of_fibres Number of fibres to fit - default=1
     * @param model_type Model type: 1 for Ball-Sticks (single-shell), 2 for Ball-Sticks (multi-shells), 4 for Ball-Binghams
     * @param fit_all_models Fit all models from 1 up to N fibres and choose the best using BIC
     * @param constrained_nonlinear Model1: Apply constrained nonlinear optimization on the diffusivity, volume fractions and their sum
     * @param constrained_nonlinear_f Model1: Apply constrained nonlinear optimization on the diffusivity, volume fractions and their sum. Return n fanning angle estimates, using the Hessian of the cost function
     * @param grid_search Use grid search (on the fanning eigenvalues). Default=off
     * @param include_noise_floor Include noise floor parameter in the model
     * @param save_bic Save BIC for certain models
     * @param verbose Switch on diagnostic messages
     * @param help Display help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PvmfitOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PVMFIT_METADATA);
    const params = pvmfit_params(data_file, mask_file, bvec_file, bval_file, output_basename, number_of_fibres, model_type, fit_all_models, constrained_nonlinear, constrained_nonlinear_f, grid_search, include_noise_floor, save_bic, verbose, help)
    return pvmfit_execute(params, execution);
}


export {
      PVMFIT_METADATA,
      PvmfitOutputs,
      PvmfitParameters,
      pvmfit,
      pvmfit_params,
};

// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DTIFIT_METADATA: Metadata = {
    id: "c67d94bae8b50749dfbcf1f528488eb3bededc2e.boutiques",
    name: "dtifit",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface DtifitParameters {
    "__STYXTYPE__": "dtifit";
    "data_file": InputPathType;
    "output_basename": string;
    "mask_file": InputPathType;
    "bvec_file": InputPathType;
    "bval_file": InputPathType;
    "verbose_flag": boolean;
    "sse_flag": boolean;
    "wls_flag": boolean;
    "kurt_flag": boolean;
    "kurtdir_flag": boolean;
    "littlebit_flag": boolean;
    "save_tensor_flag": boolean;
    "zmin"?: number | null | undefined;
    "zmax"?: number | null | undefined;
    "ymin"?: number | null | undefined;
    "ymax"?: number | null | undefined;
    "xmin"?: number | null | undefined;
    "xmax"?: number | null | undefined;
    "gradnonlin_file"?: InputPathType | null | undefined;
    "confound_regressors"?: InputPathType | null | undefined;
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
        "dtifit": dtifit_cargs,
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
        "dtifit": dtifit_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `dtifit(...)`.
 *
 * @interface
 */
interface DtifitOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Fractional anisotropy output
     */
    fa_output: OutputPathType;
    /**
     * Mean diffusivity output
     */
    md_output: OutputPathType;
    /**
     * Mode of the anisotropy output
     */
    mo_output: OutputPathType;
    /**
     * 1st eigenvalue output
     */
    l1_output: OutputPathType;
    /**
     * 2nd eigenvalue output
     */
    l2_output: OutputPathType;
    /**
     * 3rd eigenvalue output
     */
    l3_output: OutputPathType;
}


function dtifit_params(
    data_file: InputPathType,
    output_basename: string,
    mask_file: InputPathType,
    bvec_file: InputPathType,
    bval_file: InputPathType,
    verbose_flag: boolean = false,
    sse_flag: boolean = false,
    wls_flag: boolean = false,
    kurt_flag: boolean = false,
    kurtdir_flag: boolean = false,
    littlebit_flag: boolean = false,
    save_tensor_flag: boolean = false,
    zmin: number | null = null,
    zmax: number | null = null,
    ymin: number | null = null,
    ymax: number | null = null,
    xmin: number | null = null,
    xmax: number | null = null,
    gradnonlin_file: InputPathType | null = null,
    confound_regressors: InputPathType | null = null,
): DtifitParameters {
    /**
     * Build parameters.
    
     * @param data_file DTI data file
     * @param output_basename Output basename
     * @param mask_file Bet binary mask file
     * @param bvec_file B vectors file
     * @param bval_file B values file
     * @param verbose_flag Switch on diagnostic messages
     * @param sse_flag Output sum of squared errors
     * @param wls_flag Fit the tensor with weighted least squares
     * @param kurt_flag Output mean kurtosis map (for multi-shell data)
     * @param kurtdir_flag Output maps of kurtosis along each eigenvector: K1, K2, and K3 (for multi-shell data)
     * @param littlebit_flag Only process small area of brain
     * @param save_tensor_flag Save the elements of the tensor
     * @param zmin Minimum z
     * @param zmax Maximum z
     * @param ymin Minimum y
     * @param ymax Maximum y
     * @param xmin Minimum x
     * @param xmax Maximum x
     * @param gradnonlin_file Gradient Nonlinearity Tensor file
     * @param confound_regressors Input confound regressors
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dtifit" as const,
        "data_file": data_file,
        "output_basename": output_basename,
        "mask_file": mask_file,
        "bvec_file": bvec_file,
        "bval_file": bval_file,
        "verbose_flag": verbose_flag,
        "sse_flag": sse_flag,
        "wls_flag": wls_flag,
        "kurt_flag": kurt_flag,
        "kurtdir_flag": kurtdir_flag,
        "littlebit_flag": littlebit_flag,
        "save_tensor_flag": save_tensor_flag,
    };
    if (zmin !== null) {
        params["zmin"] = zmin;
    }
    if (zmax !== null) {
        params["zmax"] = zmax;
    }
    if (ymin !== null) {
        params["ymin"] = ymin;
    }
    if (ymax !== null) {
        params["ymax"] = ymax;
    }
    if (xmin !== null) {
        params["xmin"] = xmin;
    }
    if (xmax !== null) {
        params["xmax"] = xmax;
    }
    if (gradnonlin_file !== null) {
        params["gradnonlin_file"] = gradnonlin_file;
    }
    if (confound_regressors !== null) {
        params["confound_regressors"] = confound_regressors;
    }
    return params;
}


function dtifit_cargs(
    params: DtifitParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dtifit");
    cargs.push(
        "-k",
        execution.inputFile((params["data_file"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_basename"] ?? null)
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
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-V");
    }
    if ((params["sse_flag"] ?? null)) {
        cargs.push("--sse");
    }
    if ((params["wls_flag"] ?? null)) {
        cargs.push("-w");
    }
    if ((params["kurt_flag"] ?? null)) {
        cargs.push("--kurt");
    }
    if ((params["kurtdir_flag"] ?? null)) {
        cargs.push("--kurtdir");
    }
    if ((params["littlebit_flag"] ?? null)) {
        cargs.push("--littlebit");
    }
    if ((params["save_tensor_flag"] ?? null)) {
        cargs.push("--save_tensor");
    }
    if ((params["zmin"] ?? null) !== null) {
        cargs.push(
            "-z",
            String((params["zmin"] ?? null))
        );
    }
    if ((params["zmax"] ?? null) !== null) {
        cargs.push(
            "-Z",
            String((params["zmax"] ?? null))
        );
    }
    if ((params["ymin"] ?? null) !== null) {
        cargs.push(
            "-y",
            String((params["ymin"] ?? null))
        );
    }
    if ((params["ymax"] ?? null) !== null) {
        cargs.push(
            "-Y",
            String((params["ymax"] ?? null))
        );
    }
    if ((params["xmin"] ?? null) !== null) {
        cargs.push(
            "-x",
            String((params["xmin"] ?? null))
        );
    }
    if ((params["xmax"] ?? null) !== null) {
        cargs.push(
            "-X",
            String((params["xmax"] ?? null))
        );
    }
    if ((params["gradnonlin_file"] ?? null) !== null) {
        cargs.push(
            "--gradnonlin",
            execution.inputFile((params["gradnonlin_file"] ?? null))
        );
    }
    if ((params["confound_regressors"] ?? null) !== null) {
        cargs.push(
            "--cni",
            execution.inputFile((params["confound_regressors"] ?? null))
        );
    }
    return cargs;
}


function dtifit_outputs(
    params: DtifitParameters,
    execution: Execution,
): DtifitOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DtifitOutputs = {
        root: execution.outputFile("."),
        fa_output: execution.outputFile([(params["output_basename"] ?? null), "_FA.nii.gz"].join('')),
        md_output: execution.outputFile([(params["output_basename"] ?? null), "_MD.nii.gz"].join('')),
        mo_output: execution.outputFile([(params["output_basename"] ?? null), "_MO.nii.gz"].join('')),
        l1_output: execution.outputFile([(params["output_basename"] ?? null), "_L1.nii.gz"].join('')),
        l2_output: execution.outputFile([(params["output_basename"] ?? null), "_L2.nii.gz"].join('')),
        l3_output: execution.outputFile([(params["output_basename"] ?? null), "_L3.nii.gz"].join('')),
    };
    return ret;
}


function dtifit_execute(
    params: DtifitParameters,
    execution: Execution,
): DtifitOutputs {
    /**
     * DTIFIT - Fit a diffusion tensor model at each voxel.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DtifitOutputs`).
     */
    params = execution.params(params)
    const cargs = dtifit_cargs(params, execution)
    const ret = dtifit_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dtifit(
    data_file: InputPathType,
    output_basename: string,
    mask_file: InputPathType,
    bvec_file: InputPathType,
    bval_file: InputPathType,
    verbose_flag: boolean = false,
    sse_flag: boolean = false,
    wls_flag: boolean = false,
    kurt_flag: boolean = false,
    kurtdir_flag: boolean = false,
    littlebit_flag: boolean = false,
    save_tensor_flag: boolean = false,
    zmin: number | null = null,
    zmax: number | null = null,
    ymin: number | null = null,
    ymax: number | null = null,
    xmin: number | null = null,
    xmax: number | null = null,
    gradnonlin_file: InputPathType | null = null,
    confound_regressors: InputPathType | null = null,
    runner: Runner | null = null,
): DtifitOutputs {
    /**
     * DTIFIT - Fit a diffusion tensor model at each voxel.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param data_file DTI data file
     * @param output_basename Output basename
     * @param mask_file Bet binary mask file
     * @param bvec_file B vectors file
     * @param bval_file B values file
     * @param verbose_flag Switch on diagnostic messages
     * @param sse_flag Output sum of squared errors
     * @param wls_flag Fit the tensor with weighted least squares
     * @param kurt_flag Output mean kurtosis map (for multi-shell data)
     * @param kurtdir_flag Output maps of kurtosis along each eigenvector: K1, K2, and K3 (for multi-shell data)
     * @param littlebit_flag Only process small area of brain
     * @param save_tensor_flag Save the elements of the tensor
     * @param zmin Minimum z
     * @param zmax Maximum z
     * @param ymin Minimum y
     * @param ymax Maximum y
     * @param xmin Minimum x
     * @param xmax Maximum x
     * @param gradnonlin_file Gradient Nonlinearity Tensor file
     * @param confound_regressors Input confound regressors
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DtifitOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DTIFIT_METADATA);
    const params = dtifit_params(data_file, output_basename, mask_file, bvec_file, bval_file, verbose_flag, sse_flag, wls_flag, kurt_flag, kurtdir_flag, littlebit_flag, save_tensor_flag, zmin, zmax, ymin, ymax, xmin, xmax, gradnonlin_file, confound_regressors)
    return dtifit_execute(params, execution);
}


export {
      DTIFIT_METADATA,
      DtifitOutputs,
      DtifitParameters,
      dtifit,
      dtifit_params,
};

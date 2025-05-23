// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_PROBEDICOM_METADATA: Metadata = {
    id: "7f1797c009bba5f7f144df962f6ea7dfb90ac510.boutiques",
    name: "mri_probedicom",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriProbedicomParameters {
    "__STYXTYPE__": "mri_probedicom";
    "dicom_file": InputPathType;
    "option1"?: string | null | undefined;
    "option2"?: string | null | undefined;
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
        "mri_probedicom": mri_probedicom_cargs,
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
        "mri_probedicom": mri_probedicom_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_probedicom(...)`.
 *
 * @interface
 */
interface MriProbedicomOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Text file containing extracted information from DICOM.
     */
    output_file: OutputPathType;
}


function mri_probedicom_params(
    dicom_file: InputPathType,
    option1: string | null = null,
    option2: string | null = null,
): MriProbedicomParameters {
    /**
     * Build parameters.
    
     * @param dicom_file DICOM file to be probed.
     * @param option1 Description for option1
     * @param option2 Description for option2
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_probedicom" as const,
        "dicom_file": dicom_file,
    };
    if (option1 !== null) {
        params["option1"] = option1;
    }
    if (option2 !== null) {
        params["option2"] = option2;
    }
    return params;
}


function mri_probedicom_cargs(
    params: MriProbedicomParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_probedicom");
    cargs.push(execution.inputFile((params["dicom_file"] ?? null)));
    if ((params["option1"] ?? null) !== null) {
        cargs.push(
            "-option1",
            (params["option1"] ?? null)
        );
    }
    if ((params["option2"] ?? null) !== null) {
        cargs.push(
            "-option2",
            (params["option2"] ?? null)
        );
    }
    return cargs;
}


function mri_probedicom_outputs(
    params: MriProbedicomParameters,
    execution: Execution,
): MriProbedicomOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriProbedicomOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["[OUTPUT].txt"].join('')),
    };
    return ret;
}


function mri_probedicom_execute(
    params: MriProbedicomParameters,
    execution: Execution,
): MriProbedicomOutputs {
    /**
     * Utility to probe DICOM files for information.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriProbedicomOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_probedicom_cargs(params, execution)
    const ret = mri_probedicom_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_probedicom(
    dicom_file: InputPathType,
    option1: string | null = null,
    option2: string | null = null,
    runner: Runner | null = null,
): MriProbedicomOutputs {
    /**
     * Utility to probe DICOM files for information.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param dicom_file DICOM file to be probed.
     * @param option1 Description for option1
     * @param option2 Description for option2
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriProbedicomOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_PROBEDICOM_METADATA);
    const params = mri_probedicom_params(dicom_file, option1, option2)
    return mri_probedicom_execute(params, execution);
}


export {
      MRI_PROBEDICOM_METADATA,
      MriProbedicomOutputs,
      MriProbedicomParameters,
      mri_probedicom,
      mri_probedicom_params,
};
